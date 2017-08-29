import { createSelector } from 'reselect'
import { QUIZ_STATE, QUIZ_TYPE } from '../constants/quiz'
import { actions as authActions } from './auth'
import { actions as resultActions } from './result'
// ----------------------- FAKE_DATA -----------------------------
import { fakeQuizData, fakeQuizInfo } from './_fakeQuizData-supertest'
// import { fakeQuizData2 as fakeQuizData, fakeQuizInfo } from './_fakeQuizData-supertest'
// import { fakeQuizData, fakeQuizInfo } from './_fakeQuizData-maze'
// import { fakeQuizData, fakeQuizInfo } from './_fakeQuizData-funny'
import _fakeAsync from './_fakeAsync'
// ----------------------- FAKE_DATA -----------------------------

// Global Quiz States
export const types = {
  FETCH_QUIZ        : 'QUIZ/FETCH',
  FETCH_QUIZ_SUCCESS: 'QUIZ/FETCH_SUCCESS',
  FETCH_QUIZ_FAILURE: 'QUIZ/FETCH_FAILURE',
  RETRY_FETCH       : 'QUIZ/RETRY_FETCH',
  QUIZ_START        : 'QUIZ/START',
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
        quizState : QUIZ_STATE.INIT,
        isLoading : false,
        quizInfo  : action.data.quizInfo,
        quizData  : action.data.quizData,
        clientData: action.data.clientData,
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

    case types.QUIZ_START: {
      return { ...state, quizState: QUIZ_STATE.PLAY }
    }

    default: {
      return state
    }
  }
}

// SELECTORS
export const getQuestionPerPage = (state) => state.quiz.quizData.questionPerPage
export const getQuestionList    = (state) => state.quiz.quizData.questionList

export const getQuestionCount = createSelector(
  getQuestionList,
  (questionList) => questionList.length,
)
export const isSingleQuestion = createSelector(
  getQuestionPerPage,
  (questionPerPage) => (questionPerPage <= 1),
)

// ACTIONS
/**
 * Fetch Quiz, AutoLogin, then route
 *
 * @return {function(dispatch)}
 */
const init = () => {
  return async (dispatch) => {
    // concurrent requests
    const quizPromise  = dispatch(fetchQuiz())
    const loginPromise = dispatch(authActions.loginFB())

    const [quizResponse] = await Promise.all([quizPromise, loginPromise])

    if (quizResponse.error) {
      console.error(`QuizApp: "${types.FETCH_QUIZ}" failed, please try again`)
    }
    else {
      return dispatch(initRoute(quizResponse.data.quizInfo))
    }
  }
}

const fetchQuiz = () => {
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
  return async (dispatch, getState) => {
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

      return {
        error,
      }
    }
  }
}

const retryFetch = () => {
  return (dispatch) => {
    dispatch({ type: types.RETRY_FETCH })
    dispatch(init())
  }
}

/**
 * Routing after quiz initialized
 * @param   {Object} quizInfo
 *
 * @return {function(dispatch)}
 */
const initRoute = (quizInfo) => {
  return (dispatch) => {
    // Check if it should go straight into the quiz ( auto-start ) or not
    switch (quizInfo.quizType) {
      case QUIZ_TYPE.FUNNY:
      case QUIZ_TYPE.MAZE: {
        return dispatch(start())
      }

      default:
        return
    }
  }
}

/**
 * Start Quiz, entering runtime
 *
 * @return {function(dispatch)}
 */
const start = () => ({ type: types.QUIZ_START })


const submit = (data) => {
  return async (dispatch) => {
    const result = await dispatch(resultActions.fetchResult(data))

    if (result.error) {
      // ใหเขากด submit ใหม่
    }
    else {

    }
    console.log('>> result: ', result)
  }
}

export const actions = {
  init,
  retryFetch,
  start,
  submit,
}

