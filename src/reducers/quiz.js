import { createSelector } from 'reselect'

import { QUIZ_STATES, QUIZ_TYPES } from '../constants/quiz'
import { getTimerName, TIMER_TYPES } from '../constants/timer'
import { getQuestionNumberFromFieldName } from '../form'
import { isValueEmpty } from '../util/empty'
// ----------------------------------------------- FAKE_DATA
import _fakeAsync from './_fakeAsync'
// import { fakeQuizData, fakeQuizInfo } from './_fakeQuizData-maze'
// import { fakeQuizData, fakeQuizInfo } from './_fakeQuizData-funny'
// import { fakeQuizData, fakeQuizInfo } from './_fakeQuizData-supertest'
import { fakeQuizData2 as fakeQuizData, fakeQuizInfo2 as fakeQuizInfo } from './_fakeQuizData-supertest'
// ----------------------------------------------- FAKE_DATA
import { actions as authActions } from './auth'
import { actions as resultActions } from './result'
import { actions as timerActions } from './timer'

// Global Quiz States
export const types = {
  FETCH_QUIZ        : 'QUIZ/FETCH',
  FETCH_QUIZ_SUCCESS: 'QUIZ/FETCH_SUCCESS',
  FETCH_QUIZ_FAILURE: 'QUIZ/FETCH_FAILURE',
  RETRY_FETCH       : 'QUIZ/RETRY_FETCH',
  QUIZ_INIT         : 'QUIZ/INIT',
  QUIZ_START        : 'QUIZ/START',
  QUIZ_SHOW_RESULT  : 'QUIZ/SHOW_RESULT',
}

export const initialState = {
  quizState : QUIZ_STATES.LOADING,
  isLoading : true,
  quizInfo  : {},
  quizData  : {},
  clientData: {},
  error     : null,
  retryCount: 0,
}

// REDUCERS
export default function quiz(state = initialState, action) {
  switch (action.type) {

    case types.FETCH_QUIZ: {
      return {
        ...state,
        quizState: QUIZ_STATES.LOADING,
        isLoading: true,
        error    : null,
      }
    }

    case types.FETCH_QUIZ_SUCCESS: {
      return {
        ...state,
        isLoading : false,
        quizInfo  : action.payload.quizInfo,
        quizData  : action.payload.quizData,
        clientData: action.payload.clientData,
        retryCount: 0,
        error     : null,
      }
    }

    case types.FETCH_QUIZ_FAILURE: {
      return {
        ...state,
        quizState: QUIZ_STATES.FETCH_FAILED,
        isLoading: false,
        error    : action.payload,
      }
    }

    case types.RETRY_FETCH: {
      return {
        ...state,
        retryCount: state.retryCount + 1,
      }
    }

    case types.QUIZ_INIT: {
      return { ...state, quizState: QUIZ_STATES.INIT }
    }

    case types.QUIZ_START: {
      return { ...state, quizState: QUIZ_STATES.PLAY }
    }

    case types.QUIZ_SHOW_RESULT: {
      return { ...state, quizState: QUIZ_STATES.END }
    }

    default: {
      return state
    }
  }
}

// SELECTORS
export const getQuestionPerPage = state => state.quiz.quizData.questionPerPage
export const getQuestionList    = state => state.quiz.quizData.questionList
export const getQuizState       = state => state.quiz.quizState
export const getTimerData       = state => state.quiz.quizInfo.timerData
export const getIsMobile        = state => state.quiz.clientData.isMobile

export const getQuestionCount       = createSelector(
  getQuestionList,
  questionList => questionList.length,
)
export const getIsSingleQuestion    = createSelector(
  getQuestionPerPage,
  questionPerPage => (questionPerPage <= 1),
)
export const getIsResultPage        = createSelector(
  getQuizState,
  quizState => (quizState === QUIZ_STATES.END),
)
export const getAllPage             = createSelector(
  getQuestionCount, getQuestionPerPage,
  (questionCount, questionPerPage) => Math.ceil(questionCount / questionPerPage),
)
export const getIsTimerEachQuestion = createSelector(
  getTimerData,
  timerData => timerData.type === TIMER_TYPES.EACH,
)

// ACTIONS
const start = () => (dispatch, getState) => {
  dispatch({ type: types.QUIZ_START })

  const state               = getState()
  const timerData           = getTimerData(state)
  const isTimerEachQuestion = getIsTimerEachQuestion(state)

  // START TIMER of 1st Question || Global timer
  if (!isValueEmpty(timerData)) {
    dispatch(timerActions.startTimer(getTimerName(isTimerEachQuestion && 1), timerData.timeLimit))
  }
}

/**
 * Routing after quiz initialized
 *
 * @return {function(dispatch)}
 */
const initRoute = () => (dispatch, getState) => {
  const state    = getState()
  const quizInfo = state.quiz.quizInfo

  // Check if it should go straight into the quiz ( auto-start ) or not
  switch (true) {
    case quizInfo.quizType === QUIZ_TYPES.FUNNY:
    case quizInfo.quizType === QUIZ_TYPES.MAZE:
    case quizInfo.quizType === QUIZ_TYPES.SUPERTEST && !quizInfo.timerData: {
      return dispatch(start())
    }

    default:
      return
  }
}

const fakeFetch = () => {
  return _fakeAsync({
    data: {
      quizInfo  : fakeQuizInfo,
      quizData  : fakeQuizData,
      clientData: {
        isMobile: false,
      },
    },
  }, 1000)
}
const fetchQuiz = () => async (dispatch) => {
  dispatch({ type: types.FETCH_QUIZ })

  try {
    const response = await fakeFetch()
    dispatch({
      type   : types.FETCH_QUIZ_SUCCESS,
      payload: response.data,
    })

    return response
  }
  catch (error) {
    dispatch({
      type   : types.FETCH_QUIZ_FAILURE,
      payload: error,
    })

    return Promise.reject(error)
  }
}

const retryFetch = () => (dispatch) => {
  dispatch({ type: types.RETRY_FETCH })
  dispatch(init())
}

/**
 * Fetch Quiz, AutoLogin, then route
 *
 * @return  {object} action
 */
const init = () => async (dispatch) => {
  // concurrent requests
  const quizPromise  = dispatch(fetchQuiz())
  const loginPromise = dispatch(authActions.loginFB())

  try {
    await Promise.all([quizPromise, loginPromise])
    dispatch({ type: types.QUIZ_INIT })

    return dispatch(initRoute())
  }
  catch (error) {
    console.error(`QuizApp: "${types.FETCH_QUIZ}" failed, please try again`, error)
  }
}

/**
 * Prepare data to submit
 * @param   {object} data
 * @param   {object} state
 * @return  {object} dataToSubmit
 */
const prepDataToSubmit = (data, state) => {
  const questionTimeData    = state.timer.timers
  const timerData           = getTimerData(state)
  const isTimerEachQuestion = getIsTimerEachQuestion(state)

  if (isValueEmpty(timerData)) return data

  // Inject timer data
  if (isTimerEachQuestion) {
    return Object.keys(data).reduce((buffer, fieldName) => {
      const questionNumber = getQuestionNumberFromFieldName(fieldName)

      buffer[fieldName] = {
        value: data[fieldName],
        ...questionTimeData[getTimerName(questionNumber)],
      }

      return buffer
    }, {})
  } else {
    return {
      ...data,
      timer: { ...questionTimeData[getTimerName()] },
    }
  }
}

/**
 * this will be called by reduxForm handleSubmit after validate and no error occur
 * @param   {object} data
 * @return  {Promise}
 */
const submit = (data) => async (dispatch, getState) => {
  const state        = getState()
  const dataToSubmit = prepDataToSubmit(data, state)

  try {
    const response = await dispatch(resultActions.fetchResult(await dataToSubmit))
    console.log('>> result: ', response)
    return dispatch({ type: types.QUIZ_SHOW_RESULT })
  }
  catch (error) {
    // ใหเขากด submit ใหม่
    alert(error)
    return Promise.reject(error)
  }
}

export const actions = {
  init,
  retryFetch,
  start,
  submit,
}