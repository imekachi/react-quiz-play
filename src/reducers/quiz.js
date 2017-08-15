import { QUIZ_STATE } from '../constants/quizConst'

// fake data
import { fakeQuizData, fakeQuizInfo } from './_fakeQuizData'

// Global Quiz States
export const types = {
  FETCH_QUIZ        : 'QUIZ/FETCH',
  FETCH_QUIZ_SUCCESS: 'QUIZ/FETCH_SUCCESS',
  FETCH_QUIZ_FAILURE: 'QUIZ/FETCH_FAILURE',
  QUIZ_INIT         : 'QUIZ/INIT',
  QUIZ_START        : 'QUIZ/START',
}

export const initialState = {
  quizState: QUIZ_STATE.LOADING,
  isLoading: true,
  quizInfo : {},
  quizData : {},
  error    : null,
}

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
        quizState: QUIZ_STATE.INIT,
        isLoading: false,
        quizInfo : action.payload.quizInfo,
        quizData : action.payload.quizData,
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
          payload: {
            quizInfo: fakeQuizInfo,
            quizData: fakeQuizData,
          },
        })
      }, 1000)
    }
  },
  init     : function () {
    return (dispatch) => {
      dispatch({ type: types.QUIZ_INIT })
      dispatch(this.fetchQuiz())
    }
  },
  start    : () => {
    return (dispatch) => {
      dispatch({ type: types.QUIZ_START })
    }
  },
}