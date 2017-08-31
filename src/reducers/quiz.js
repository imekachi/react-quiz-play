import { createSelector } from 'reselect'
import { QUIZ_STATES, QUIZ_TYPES } from '../constants/quiz'
import { actions as authActions } from './auth'
import { actions as resultActions } from './result'
// ----------------------------------------------- FAKE_DATA
// import { fakeQuizData, fakeQuizInfo } from './_fakeQuizData-supertest'
import { fakeQuizData2 as fakeQuizData, fakeQuizInfo2 as fakeQuizInfo } from './_fakeQuizData-supertest'
// import { fakeQuizData, fakeQuizInfo } from './_fakeQuizData-maze'
// import { fakeQuizData, fakeQuizInfo } from './_fakeQuizData-funny'
import _fakeAsync from './_fakeAsync'
// ----------------------------------------------- FAKE_DATA

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
export const getQuestionPerPage = (state) => state.quiz.quizData.questionPerPage
export const getQuestionList    = (state) => state.quiz.quizData.questionList
export const getQuizState       = (state) => state.quiz.quizState

export const getQuestionCount    = createSelector(
  getQuestionList,
  (questionList) => questionList.length,
)
export const getIsSingleQuestion = createSelector(
  getQuestionPerPage,
  (questionPerPage) => (questionPerPage <= 1),
)
export const getIsResultPage     = createSelector(
  getQuizState,
  (quizState) => (quizState === QUIZ_STATES.END),
)

// ACTIONS
const start = () => ({ type: types.QUIZ_START })

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
 * @return {function(dispatch)}
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

// this will be called by reduxForm handleSubmit
// it receive promise
const submit = (data) => async (dispatch) => {
  try {
    const response = await dispatch(resultActions.fetchResult(data))
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