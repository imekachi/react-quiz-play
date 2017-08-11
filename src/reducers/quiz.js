import { QUIZ_STATE } from '../constants'
import { actions as authActions } from './auth'

// fake data
import fakeQuizData from './_fakeQuizData'

// Global Quiz States
export const types = {
  FETCH_QUIZ        : 'QUIZ/FETCH_QUIZ',
  FETCH_QUIZ_SUCCESS: 'QUIZ/FETCH_QUIZ_SUCCESS',
  FETCH_QUIZ_FAILURE: 'QUIZ/FETCH_QUIZ_FAILURE',
  QUIZ_INIT         : 'QUIZ/INIT',
  QUIZ_START        : 'QUIZ/START',
}

export const initialState = {
  quizState: null,
  isLoading: true,
  quizData : null,
  error    : null,
}

export default function app(state = initialState, action) {

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
        quizState: QUIZ_STATE.INIT,
        isLoading: false,
        quizData : action.payload,
        error    : null,
      }
    }
    case types.FETCH_QUIZ_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error    : action.payload,
      }
    }

    case types.QUIZ_INIT: {
      return { ...state, quizState: QUIZ_STATE.INIT }
    }

    case types.QUIZ_START: {
      return { ...state, quizState: QUIZ_STATE.PLAY }
    }

    default: {
      return state
    }
  }
}

export const actions = {
  fetchQuiz: () => {
    return (dispatch) => {
      dispatch({ type: types.FETCH_QUIZ })

      // FAKE FETCH
      setTimeout(() => {
        dispatch({
          type   : types.FETCH_QUIZ_SUCCESS,
          payload: fakeQuizData,
        })
      }, 1000)
    }
  },
  init     : () => {
    return (dispatch) => {
      dispatch({ type: types.QUIZ_INIT })
      dispatch(authActions.loginFB())
    }
  },
  start    : () => {
    return (dispatch) => {
      dispatch({ type: types.QUIZ_START })
    }
  },
}