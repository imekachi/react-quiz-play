import { getFormSyncErrors, isPristine, isSubmitting, isValid, submit as reduxFormSubmit } from 'redux-form'
import { createSelector } from 'reselect'

import { DELAYS, FORM_NAMES } from '../constants/quiz'
import { getFieldName } from '../containers/FormPlay'
import { wait } from '../util/async'
import { capMax, capMin } from '../util/number'
import {
  getAllPage,
  getIsSingleQuestion,
  getIsTimerEachQuestion,
  getQuestionCount,
  getQuestionList,
  getQuestionPerPage,
  getTimerData,
} from './quiz'
import { actions as timerActions } from './timer'

export const types = {
  PAGE_CHANGE: 'RUNTIME/PAGE_CHANGE',
  ADD_ANSWER : 'RUNTIME/ADD_ANSWER',
}

export const initialState = {
  currentPage: 1,
  canGoBack  : false,
}

// REDUCERS
export default function runtime(state = initialState, action) {

  switch (action.type) {

    case types.PAGE_CHANGE: {
      return { ...state, currentPage: action.payload }
    }

    default: {
      return state
    }
  }
}

// SELECTORS
export const getCurrentPage = state => state.runtime.currentPage

export const getStartQuestion = createSelector(
  getCurrentPage, getQuestionPerPage,
  (currentPage, questionPerPage) => (questionPerPage * ( currentPage - 1 )) + 1,
)

export const getEndQuestion = createSelector(
  getCurrentPage, getQuestionPerPage,
  (currentPage, questionPerPage) => questionPerPage * currentPage,
)

export const getCurrentQuestionStream = createSelector(
  getQuestionList, getStartQuestion, getEndQuestion,
  (questionList, startQuestion, endQuestion) => {
    return questionList.slice(startQuestion - 1, endQuestion)
  },
)

/**
 * Disable next button when-
 * - there is no change to data in the forms
 * - the form is submitting
 * - if it's singleQuestion and there is any error in that question
 *
 * if there are more than one questions in a page, better let user press 'Next'
 * then auto-scroll to the error question for better experience
 */
export const getIsNextButtonDisabled = createSelector(
  getIsSingleQuestion, getCurrentPage, isPristine(FORM_NAMES.QUIZ_PLAY), isSubmitting(FORM_NAMES.QUIZ_PLAY), getFormSyncErrors(FORM_NAMES.QUIZ_PLAY),
  (isSingleQuestion, currentPage, isPristine, isSubmitting, formSyncErrors = {}) => {
    // return isPristine || isSubmitting || !!(isSingleQuestion && Object.keys(formSyncErrors).includes(getFieldName(currentPage)))
    return isSubmitting || !!(isSingleQuestion && Object.keys(formSyncErrors).includes(getFieldName(currentPage)))
  },
)

// ACTION
const nextPage = () => (dispatch, getState) => {
  const state       = getState()
  const allPage     = getAllPage(state)
  const currentPage = getCurrentPage(state)
  dispatch({
    type   : types.PAGE_CHANGE,
    payload: capMax(currentPage + 1, allPage),
  })
}

const prevPage = () => (dispatch, getState) => {
  const { currentPage } = getState()
  dispatch({
    type   : types.PAGE_CHANGE,
    payload: capMin(currentPage - 1, 1),
  })
}

const questionAnswered = (props) => (dispatch, getState) => {
  const { questionNumber, isMultipleChoice } = props

  const state           = getState()
  const isFormValid     = isValid(FORM_NAMES.QUIZ_PLAY)(state)
  const isLastQuestion  = questionNumber >= getQuestionCount(state)
  const timerData       = getTimerData(state)
  const nextActionDelay = isMultipleChoice ? DELAYS.BEFORE_NEXT_PAGE : 0

  // AUTO SUBMIT when form is valid, no error
  if (isFormValid && isLastQuestion) {
    console.log('>> AUTO-SUBMIT ')
    // TODO: possible bug, should be in the submit function
    if (timerData && !getIsTimerEachQuestion(state)) {
      dispatch(timerActions.stopTimer(FORM_NAMES.QUIZ_PLAY))
    }
    return wait(nextActionDelay).then(() => dispatch(reduxFormSubmit(FORM_NAMES.QUIZ_PLAY)))
  }

  // AUTO NEXT QUESTION
  if (getIsSingleQuestion(state)) {
    wait(nextActionDelay).then(() => dispatch(nextPage()))
  } else {
    // TODO: make it auto scroll
  }
}

export const actions = {
  nextPage,
  prevPage,
  questionAnswered,
}