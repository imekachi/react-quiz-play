import { scroller } from 'react-scroll'
import {
  change,
  getFormSyncErrors,
  hasSubmitSucceeded,
  isPristine,
  isSubmitting,
  submit as reduxFormSubmit,
} from 'redux-form'
import { createSelector } from 'reselect'

import { DELAYS, FORM_NAMES } from '../constants/quiz'
import { getTimerName, TIMER_TYPES } from '../constants/timer'
import { getFieldName } from '../form'
import { wait } from '../util/async'
import { isValueEmpty } from '../util/empty'
import { capMax, capMin } from '../util/number'
import {
  getAllPage,
  getIsMobile,
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

export const scrollToComponent = (componentName, options = {}) => {
  const offsetDesktop = -150
  const offsetMobile  = -200

  scroller.scrollTo(componentName, {
    duration: 300,
    smooth  : true,
    offset  : options.isMobile ? offsetMobile : offsetDesktop,
    ...options
  })
}

const autoNextQuestion = ({ questionNumber, timerData, isTimerEachQuestion, nextQuestionDelay }, dispatch, state) => {
  const isMobile           = getIsMobile(state)
  const isSingleQuestion   = getIsSingleQuestion(state)
  const isLastQuestion     = questionNumber >= getQuestionCount(state)
  const nextQuestionNumber = questionNumber + 1

  if (isSingleQuestion) {
    wait(nextQuestionDelay).then(() => dispatch(nextPage()))
    isTimerEachQuestion && dispatch(timerActions.startTimer(getTimerName(nextQuestionNumber), timerData.timeLimit))
  } else if (!isLastQuestion) {
    scrollToComponent(getFieldName(nextQuestionNumber), { isMobile })
  }
}

const autoSubmit = async ({ isTimerEachQuestion, submitDelay }, dispatch) => {
  if (!isTimerEachQuestion) {
    await dispatch(timerActions.stopTimer(getTimerName()))
  }
  return wait(submitDelay).then(() => dispatch(reduxFormSubmit(FORM_NAMES.QUIZ_PLAY)))
}

const shouldAnswerUpdate = (state) => {
  const isFormSubmitting = isSubmitting(FORM_NAMES.QUIZ_PLAY)(state)
  const isFormSubmitted  = hasSubmitSucceeded(FORM_NAMES.QUIZ_PLAY)(state)

  return !(isFormSubmitting || isFormSubmitted)
}

const questionAnswered = (props) => async (dispatch, getState) => {
  let state         = getState()
  const updateState = () => state = getState()

  if (await !shouldAnswerUpdate(state)) return

  await dispatch(change(FORM_NAMES.QUIZ_PLAY, props.input.name, props.value))
  await updateState()

  const { questionNumber, isMultipleChoice } = props

  const isFormValid         = isValueEmpty(getFormSyncErrors(FORM_NAMES.QUIZ_PLAY)(state))
  const timerData           = getTimerData(state)
  const isTimerEachQuestion = !isValueEmpty(timerData) && getIsTimerEachQuestion(state)
  const nextActionDelay     = isMultipleChoice ? DELAYS.BEFORE_NEXT_PAGE : 0

  // STOP TIMER EACH QUESTION
  if (isTimerEachQuestion) {
    dispatch(timerActions.stopTimer(getTimerName(questionNumber)))
  }
  // console.warn(`>> ANSWERED(${questionNumber}): ${props.value}`)

  if (isFormValid) {
    return autoSubmit({
      isTimerEachQuestion,
      submitDelay: nextActionDelay,
    }, dispatch)
  } else {
    return autoNextQuestion({
      questionNumber,
      timerData,
      isTimerEachQuestion,
      nextQuestionDelay: nextActionDelay,
    }, dispatch, state)
  }
}

export const actions = {
  nextPage,
  prevPage,
  questionAnswered,
}