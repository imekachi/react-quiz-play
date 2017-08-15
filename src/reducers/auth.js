// AUTH REDUCER

import { LOGIN_FACEBOOK } from '../constants/authConst'

export const types = {
  LOGIN_REQUEST: 'AUTH/LOGIN_REQUEST',
  LOGIN_SUCCESS: 'AUTH/LOGIN_SUCCESS',
  LOGIN_FAILURE: 'AUTH/LOGIN_FAILURE',
  LOGOUT       : 'AUTH/LOGOUT',
}

export const initialState = {
  user               : null,
  isLoading          : false,
  isLogin            : false,
  loginRequestingType: null,
  loggedInType       : new Set([]),
  error              : null,
}

export default function authReducer(state = initialState, action) {

  switch (action.type) {

    case types.LOGIN_REQUEST: {
      return { ...state, isLoading: true, loginRequestingType: action.payload, error: null }
    }

    case types.LOGIN_SUCCESS: {
      return {
        ...state,
        isLoading          : false,
        user               : { ...state.user, ...action.payload },
        loggedInType       : new Set([...state.loggedInType, state.loginRequestingType]),
        loginRequestingType: null,
        isLogin            : true,
      }
    }

    case types.LOGIN_FAILURE: {
      return {
        ...state,
        isLoading          : false,
        loginRequestingType: null,
        error: action.payload,
      }
    }

    case types.LOGOUT: {
      return { ...initialState }
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
      dispatch({ type: types.LOGIN_REQUEST, payload: LOGIN_FACEBOOK })

      // FAKE LOGIN
      setTimeout(() => {
        dispatch({
          type   : types.LOGIN_SUCCESS,
          payload: {
            facebook: {
              id       : 100001207968554,
              name     : 'Saran Weerakun',
              firstName: 'Saran',
            },
          },
        })
      }, 3000)
    }
  },

  logout: () => ({ type: types.LOGOUT }),
}