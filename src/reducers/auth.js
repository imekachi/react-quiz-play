// AUTH REDUCER
import { createSelector } from 'reselect'
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
  user         : {},
  isLoading    : false,
  loggingInType: new Set([]),
  error        : null,
}

// REDUCERS
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
      // remove logoutType data from user data
      const { [action.payload.logoutType]: omit, ...user } = state.user
      return {
        ...state,
        user,
      }
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

const loginFB = () => {
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
}

const loginDekD = (user) => {
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
}

const logout = (logoutType) => ({
  type   : types.LOGOUT,
  payload: { logoutType },
})

export const actions = {
  loginFB,
  loginDekD,
  logout,
}

// SELECTORS
export const getUser          = (state) => state.auth.user
export const getIsLoading     = (state) => state.auth.isLoading
export const getLoggingInType = (state) => state.auth.loggingInType

export const selectLoggedInType = createSelector(
  getUser,
  (user) => new Set(Object.keys(user)),
)
export const selectIsLogin      = createSelector(
  selectLoggedInType,
  (loggedInType) => loggedInType.size > 0,
)
export const selectIsFBLoading  = createSelector(
  getIsLoading, getLoggingInType,
  (isLoading, loggingInType) => isLoading && loggingInType.has(AUTH_FACEBOOK),
)