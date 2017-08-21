import { createSelector } from 'reselect'
import { getQuestionCount, getQuestionList, getQuestionPerPage } from './quiz'

export const types = {
  PAGE_NEXT: 'RUNTIME/PAGE_NEXT',
  PAGE_PREV: 'RUNTIME/PAGE_PREV',
}

export const initialState = {
  currentPage: 1,
  chosenChoices: [],
  canGoBack  : false,
}

// REDUCERS
export default function runtime(state = initialState, action) {

  switch (action.type) {

    case types.PAGE_NEXT: {
      return { ...state, currentPage: state.currentPage + 1 }
    }

    default: {
      return state
    }
  }
}

// ACTIONS
const nextPage = () => ({ type: types.PAGE_NEXT })

export const actions = {
  nextPage,
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