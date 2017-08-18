import { createSelector } from 'reselect'
import { getQuestionCount, getQuestionPerPage } from './quiz'

export const types = {
  PAGE_NEXT: 'RUNTIME/PAGE_NEXT',
  PAGE_PREV: 'RUNTIME/PAGE_PREV',
}

export const initialState = {
  currentPage: 1,
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

export const selectAllPage = createSelector(
  getQuestionCount, getQuestionPerPage,
  (questionCount, questionPerPage) => Math.ceil(questionCount / questionPerPage),
)

export const selectStartQuesiton = createSelector(
  getCurrentPage, getQuestionPerPage,
  (currentPage, questionPerPage) => (questionPerPage * ( currentPage - 1 )) + 1,
)