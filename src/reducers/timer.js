// TYPES
import { capMin } from '../util/number'

export const types = {
  TIMER_START: 'TIMER/START',
  TIMER_TICK : 'TIMER/TICK',
  TIMER_STOP : 'TIMER/STOP',
}

/**
 * Each timer model
 *
 * [fieldName]: {
 *   intervalId: {number},
 *   startTimestamp: {Date},
 *   endTimestamp: {Date},
 * }
 */
export const initialState = {
  timeLeft: 0,
  timers  : {},
}

export const TIMER_FPS  = 1
export const TIMER_STEP = 1000 / TIMER_FPS

// REDUCERS
export default function timer(state = initialState, action) {

  switch (action.type) {

    case types.TIMER_START: {
      return {
        ...state,
        timeLeft: action.payload.timeLimit,
        timers  : {
          ...state.timers,
          [action.payload.name]: {
            ...state.timers[action.payload.name],
            startTimestamp: action.payload.time,
            intervalId    : action.intervalId,
          },
        },
      }
    }

    case types.TIMER_STOP: {
      return {
        ...state,
        timers: {
          ...state.timers,
          [action.payload.name]: {
            ...state.timers[action.payload.name],
            endTimestamp: action.payload.time,
            intervalId  : null,
          },
        },
      }
    }

    case types.TIMER_TICK: {
      return {
        ...state,
        timeLeft: capMin(state.timeLeft - action.payload.step, 0),
        timers  : {
          ...state.timers,
          [action.payload.name]: {
            ...state.timers[action.payload.name],
            intervalId: action.payload.intervalId || state.timers[action.payload.name].intervalId,
          },
        },
      }
    }

    default: {
      return state
    }
  }
}

// ACTIONS
const startTimer = (name, timeLimit) => (dispatch) => {
  const action = {
    type   : types.TIMER_START,
    payload: {
      name,
      time: Date.now(),
      timeLimit,
    },
  }
  dispatch(action)
  console.log('>> START: ', action)
}

const stopTimer = (name) => async (dispatch, getState) => {
  await dispatch({
    type   : types.TIMER_STOP,
    payload: {
      name,
      time: Date.now(),
    },
  })
  console.log('>> STOP: ', getState().timer.timers[name])
}

const tickTimer = (name, step, intervalId) => (dispatch) => {
  dispatch({
    type   : types.TIMER_TICK,
    payload: {
      name,
      step,
      intervalId,
    },
  })
}

export const actions = {
  startTimer,
  tickTimer,
  stopTimer,
}