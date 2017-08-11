// AUTH REDUCER

export const types = {
  LOGIN_REQUEST: 'AUTH/LOGIN_REQUEST',
  LOGIN_SUCCESS: 'AUTH/LOGIN_SUCCESS',
  LOGIN_FAILURE: 'AUTH/LOGIN_FAILURE',
  LOGOUT       : 'AUTH/LOGOUT',
}

export const initialState = {
  user     : null,
  isLoading: false,
  error    : null,
}

export default function authReducer(state = initialState, action) {

  switch (action.type) {

    case types.LOGIN_REQUEST: {
      return { ...state, isLoading: true, error: null }
    }

    case types.LOGIN_SUCCESS: {
      return { ...state, isLoading: false, user: action.payload }
    }

    case types.LOGIN_FAILURE: {
      return { ...state, isLoading: false, error: action.payload }
    }

    default: {
      return state
    }
  }
}

// ACTIONS
export const actions = {
  loginFB: () => {
    return (dispatch) => {
      dispatch({ type: types.LOGIN_REQUEST })

      // FAKE LOGIN
      setTimeout(() => {
        dispatch({
          type: types.LOGIN_SUCCESS,
          user: {
            id       : 100001207968554,
            name     : 'Saran Weerakun',
            firstName: 'Saran',
          },
        })
      }, 1000)
    }
  },

  logout: () => ({ type: types.LOGOUT }),
}