export const types = {
  INIT     : 'RUNTIME/INIT',
  PAGE_NEXT: 'RUNTIME/PAGE_NEXT',
  PAGE_PREV: 'RUNTIME/PAGE_PREV',
}

export const initialState = {
  currentPage: 1,
  allPage    : 1,
  canGoBack  : false,
}

export default function runtime(state = initialState, action) {

  switch (action.type) {

    case types.INIT: {
      return { ...state, }
    }

    default: {
      return state
    }
  }
}