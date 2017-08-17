export const types = {
  INIT     : 'RUNTIME/INIT',
  PAGE_NEXT: 'RUNTIME/PAGE_NEXT',
  PAGE_PREV: 'RUNTIME/PAGE_PREV',
}

export const initialState = {
  questionCount  : 1,
  questionPerPage: 1,
  currentPage    : 1,
  allPage        : 1,
  startQuestion  : 1,
  canGoBack      : false,
}

// REDUCERS
export default function runtime(state = initialState, action) {

  switch (action.type) {

    case types.INIT: {
      return {
        ...state,
        questionCount  : action.payload.questionCount,
        questionPerPage: action.payload.questionPerPage,
        allPage        : Math.ceil(action.payload.questionCount / action.payload.questionPerPage),
      }
    }

    case types.PAGE_NEXT: {
      const currentPage   = state.currentPage + 1
      const startQuestion = (state.questionPerPage * ( currentPage - 1 )) + 1

      return { ...state, currentPage, startQuestion }
    }

    default: {
      return state
    }
  }
}

// ACTIONS

const init = (questionCount = 1, questionPerPage = 1) => {
  return (dispatch) => {
    dispatch({
      type   : types.INIT,
      payload: {
        questionCount,
        questionPerPage,
      },
    })
  }
}

const nextPage = () => ({ type: types.PAGE_NEXT })

export const actions = {
  init,
  nextPage,
}