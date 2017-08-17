// AUTH REDUCER

import { AUTH_DEKD, AUTH_FACEBOOK } from '../constants/authConst'
import { immutateSetAdd, immutateSetDelete } from '../util/set'
import _fakeAsync from './_fakeAsync'

export const types = {
  LOGIN_REQUEST: 'AUTH/LOGIN_REQUEST',
  LOGIN_SUCCESS: 'AUTH/LOGIN_SUCCESS',
  LOGIN_FAILURE: 'AUTH/LOGIN_FAILURE',
  LOGOUT       : 'AUTH/LOGOUT',
}

export const initialState = {
  user         : null,
  isLoading    : false,
  isLogin      : false,
  loggingInType: new Set([]),
  loggedInType : new Set([]),
  error        : null,
}

export default function authReducer(state = initialState, action) {

  switch (action.type) {

    case types.LOGIN_REQUEST: {
      return {
        ...state,
        isLoading    : true,
        loggingInType: immutateSetAdd(state.loggingInType, action.payload),
        error        : null,
      }
    }

    case types.LOGIN_SUCCESS: {
      return {
        ...state,
        isLoading    : false,
        user         : { ...state.user, ...action.payload.user },
        loggingInType: immutateSetDelete(state.loggingInType, action.payload.loggingInType),
        loggedInType : immutateSetAdd(state.loggedInType, action.payload.loggingInType),
        isLogin      : true,
      }
    }

    case types.LOGIN_FAILURE: {
      return {
        ...state,
        isLoading    : false,
        loggingInType: immutateSetDelete(state.loggingInType, action.payload.loggingInType),
        error        : action.payload.error,
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

const fakeLoginFb = () => {
  return _fakeAsync({
    data: {
      id       : 100001207968554,
      name     : 'Saran Weerakun',
      firstName: 'Saran',
    },
  }, 4000)
}

// ACTIONS
export const actions = {
  loginFB: () => {
    return async (dispatch) => {
      dispatch({ type: types.LOGIN_REQUEST, payload: AUTH_FACEBOOK })

      try {
        const response = await fakeLoginFb()

        dispatch({
          type   : types.LOGIN_SUCCESS,
          payload: {
            loggingInType: AUTH_FACEBOOK,
            user         : {
              [AUTH_FACEBOOK]: response.data,
            },
          },
        })

        return response.data

      } catch (error) {
        dispatch({
          type   : types.LOGIN_FAILURE,
          payload: {
            loggingInType: AUTH_FACEBOOK,
            error,
          },
        })

        return error
      }
    }
  },

  loginDekD: (user) => {
    return (dispatch) => {
      dispatch({
        type   : types.LOGIN_SUCCESS,
        payload: {
          loggingInType: AUTH_DEKD,
          user         : {
            [AUTH_DEKD]: user,
          },
        },
      })
    }
  },

  logout: (logoutType) => ({
    type: types.LOGOUT,
  }),
}