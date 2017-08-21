import { createSelector } from 'reselect'
import { getQuestionCount, getQuestionList, getQuestionPerPage } from './quiz'
import { capMin } from '../util/number'

export const types = {
  PAGE_CHANGE: 'RUNTIME/PAGE_CHANGE',
  ADD_ANSWER : 'RUNTIME/ADD_ANSWER',
}

export const initialState = {
  currentPage  : 1,
  chosenChoices: [],
  canGoBack    : false,
}

// REDUCERS
export default function runtime(state = initialState, action) {

  switch (action.type) {

    case types.PAGE_CHANGE: {
      return { ...state, currentPage: action.payload }
    }

    case types.ADD_ANSWER: {
      let newChosenChoices = []

      newChosenChoices[action.payload.questionNumber - 1] = action.payload.answerValue
      return {
        ...state,
        chosenChoices: Object.assign([], state.chosenChoices, newChosenChoices),
      }
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

export const getCurrentQuestionStream = createSelector(
  getQuestionList, getQuestionPerPage, getStartQuestion,
  (questionList, questionPerPage, startQuestion) => {
    return questionList.filter((questionObj, index) => {
      const questionNumber = index + 1
      return (questionNumber >= startQuestion) && (questionNumber < startQuestion + questionPerPage)
    })
  },
)

// ACTIONS
const submit = () => {
  return (dispatch) => {

  }
}

const nextPage = () => {
  return (dispatch, getState) => {
    const state   = getState()
    const allPage = getAllPage(state)

    if (state.currentPage >= allPage)
      dispatch(submit())
    else
      dispatch({
        type   : types.PAGE_CHANGE,
        payload: state.currentPage + 1,
      })
  }
}

const prevPage = () => {
  return (dispatch, getState) => {
    const { currentPage } = getState()
    dispatch({
      type   : types.PAGE_CHANGE,
      payload: capMin(currentPage - 1, 1),
    })
  }
}

const addAnswer = (questionNumber, answerValue) => ({
  type   : types.ADD_ANSWER,
  payload: {
    questionNumber,
    answerValue,
  },
})

export const actions = {
  nextPage,
  prevPage,
  addAnswer,
}