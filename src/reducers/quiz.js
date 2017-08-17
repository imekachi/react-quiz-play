import { QUIZ_STATE, QUIZ_TYPE } from '../constants/quizConst'
import { actions as AuthActions } from './auth'

// fake data
// import { fakeQuizData, fakeQuizInfo } from './_fakeQuizData-supertest'
import { fakeQuizData, fakeQuizInfo } from './_fakeQuizData-funny'
import _fakeAsync from './_fakeAsync'

// Global Quiz States
export const types = {
  FETCH_QUIZ        : 'QUIZ/FETCH',
  FETCH_QUIZ_SUCCESS: 'QUIZ/FETCH_SUCCESS',
  FETCH_QUIZ_FAILURE: 'QUIZ/FETCH_FAILURE',
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

    case types.QUIZ_START: {
      return { ...state, quizState: QUIZ_STATE.PLAY }
    }

    default: {
      return state
    }
  }
}


const fakeFetch = () => {
  return _fakeAsync({
    data: {
      quizInfo: fakeQuizInfo,
      quizData: fakeQuizData,
    },
  }, 3000)
}

export const actions = {
  fetchQuiz: () => {
    return async (dispatch) => {
      dispatch({ type: types.FETCH_QUIZ })

      try {
        const response = await fakeFetch()
        dispatch({
          type   : types.FETCH_QUIZ_SUCCESS,
          payload: response.data,
        })

        return response.data
      } catch (error) {
        dispatch({
          type   : types.FETCH_QUIZ_FAILURE,
          payload: error,
        })
      }
    }
  },
  init     : function () {
    return async (dispatch) => {
      const responseQuiz = await dispatch(this.fetchQuiz())
      await dispatch(AuthActions.loginFB())

      return dispatch(this.initRoute(responseQuiz.quizInfo))
    }
  },
  initRoute: function (quizInfo) {
    return (dispatch) => {
      // Check if it should go straight into the quiz ( auto-start ) or not
      switch (quizInfo.quizType) {
        case QUIZ_TYPE.FUNNY:
        case QUIZ_TYPE.MAZE: {
          return dispatch(this.start())
        }

        default:
          return
      }
    }
  },
  start    : () => {
    return (dispatch) => {
      dispatch({ type: types.QUIZ_START })
    }
  },
}