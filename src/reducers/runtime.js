import { createSelector } from 'reselect'
import { getFormSyncErrors, isPristine, isSubmitting, isValid, submit as reduxFormSubmit } from 'redux-form'
import { capMax, capMin } from '../util/number'
import { wait } from '../util/async'

import { DELAYS, FORM_NAMES } from '../constants/quiz'
import { getIsSingleQuestion, getQuestionCount, getQuestionList, getQuestionPerPage } from './quiz'
import { getFieldName } from '../containers/FormPlay'

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
export const getCurrentPage = (state) => state.runtime.currentPage

export const getAllPage = createSelector(
  getQuestionCount, getQuestionPerPage,
  (questionCount, questionPerPage) => Math.ceil(questionCount / questionPerPage),
)

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

  const state            = getState()
  const allQuestionCount = getQuestionCount(state)
  const isFormValid      = isValid(FORM_NAMES.QUIZ_PLAY)(state)

  const actionDelay = isMultipleChoice ? DELAYS.BEFORE_NEXT_PAGE : 0

  // AUTO SUBMIT ON LAST QUESTION
  if (isFormValid && questionNumber >= allQuestionCount) {
    return wait(actionDelay).then(() => dispatch(reduxFormSubmit(FORM_NAMES.QUIZ_PLAY)))
  }

  // AUTO NEXT QUESTION
  if (getIsSingleQuestion(state)) {
    wait(actionDelay).then(() => dispatch(nextPage()))
  }
  else {
    // TODO: make it auto scroll
  }
}

export const actions = {
  nextPage,
  prevPage,
  questionAnswered,
}