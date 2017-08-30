import { createSelector } from 'reselect'
import { QUIZ_STATE, QUIZ_TYPE } from '../constants/quiz'
import { actions as authActions } from './auth'
import { actions as resultActions } from './result'
// ----------------------------------------------- FAKE_DATA
import { fakeQuizData, fakeQuizInfo } from './_fakeQuizData-supertest'
// import { fakeQuizData2 as fakeQuizData, fakeQuizInfo2 as fakeQuizInfo } from './_fakeQuizData-supertest'
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
  quizState : QUIZ_STATE.LOADING,
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
        quizState: QUIZ_STATE.LOADING,
        isLoading: true,
        error    : null,
      }
    }

    case types.FETCH_QUIZ_SUCCESS: {
      return {
        ...state,
        isLoading : false,
        quizInfo  : action.data.quizInfo,
        quizData  : action.data.quizData,
        clientData: action.data.clientData,
        retryCount: 0,
        error     : null,
      }
    }

    case types.FETCH_QUIZ_FAILURE: {
      return {
        ...state,
        quizState: QUIZ_STATE.FETCH_FAILED,
        isLoading: false,
        error    : action.error,
      }
    }

    case types.RETRY_FETCH: {
      return {
        ...state,
        retryCount: state.retryCount + 1,
      }
    }

    case types.QUIZ_INIT: {
      return { ...state, quizState: QUIZ_STATE.INIT }
    }

    case types.QUIZ_START: {
      return { ...state, quizState: QUIZ_STATE.PLAY }
    }

    case types.QUIZ_SHOW_RESULT: {
      return { ...state, quizState: QUIZ_STATE.END }
    }

    default: {
      return state
    }
  }
}

// SELECTORS
export const getQuestionPerPage = (state) => state.quiz.quizData.questionPerPage
export const getQuestionList    = (state) => state.quiz.quizData.questionList

export const getQuestionCount    = createSelector(
  getQuestionList,
  (questionList) => questionList.length,
)
export const getIsSingleQuestion = createSelector(
  getQuestionPerPage,
  (questionPerPage) => (questionPerPage <= 1),
)

// ACTIONS
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
    const [quizResponse] = await Promise.all([quizPromise, loginPromise])
    dispatch({ type: types.QUIZ_INIT })

    return dispatch(initRoute(quizResponse.data.quizInfo))
  }
  catch (error) {
    console.error(`QuizApp: "${types.FETCH_QUIZ}" failed, please try again`)
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
  }, 1500)
}
const fetchQuiz = () => async (dispatch) => {
  dispatch({ type: types.FETCH_QUIZ })

  try {
    const response = await fakeFetch()
    dispatch({
      type: types.FETCH_QUIZ_SUCCESS,
      data: response.data,
    })

    return response
  } catch (error) {
    dispatch({
      type: types.FETCH_QUIZ_FAILURE,
      error,
    })

    return Promise.reject(error)
  }
}

const retryFetch = () => (dispatch) => {
  dispatch({ type: types.RETRY_FETCH })
  dispatch(init())
}

/**
 * Routing after quiz initialized
 * @param   {Object} quizInfo
 *
 * @return {function(dispatch)}
 */
const initRoute = (quizInfo) => (dispatch) => {
  // Check if it should go straight into the quiz ( auto-start ) or not
  switch (true) {
    case quizInfo.quizType === QUIZ_TYPE.FUNNY:
    case quizInfo.quizType === QUIZ_TYPE.MAZE:
    case quizInfo.quizType === QUIZ_TYPE.SUPERTEST && !quizInfo.timerData: {
      return dispatch(start())
    }

    default:
      return
  }
}

/**
 * Start Quiz, entering runtime
 *
 * @return {function(dispatch)}
 */
const start = () => ({ type: types.QUIZ_START })


// this will be called by reduxForm handleSubmit
// it receive promise
const submit = (data) => async (dispatch) => {
  const result = await dispatch(resultActions.fetchResult(data))
  console.log('>> result: ', result)

  if (result.error) {
    // ใหเขากด submit ใหม่
    alert(result.error)
    throw result.error
  }
  else {
    dispatch({ type: types.QUIZ_SHOW_RESULT })
  }
}

export const actions = {
  init,
  retryFetch,
  start,
  submit,
}

