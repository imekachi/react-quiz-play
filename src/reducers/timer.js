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
      // extract intervalId to remove it, it will not be in the next state
      const { intervalId, ...restTimerData } = state.timers[action.payload.name]
      return {
        ...state,
        timers: {
          ...state.timers,
          [action.payload.name]: {
            ...restTimerData,
            endTimestamp: action.payload.time,
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

const isTimerExist = (state, name) => state.timer.timers.hasOwnProperty(name)

// ACTIONS
const startTimer = (name, timeLimit) => (dispatch, getState) => {
  const state = getState()
  if (isTimerExist(state, name)) return

  dispatch({
    type   : types.TIMER_START,
    payload: {
      name,
      time: Date.now(),
      timeLimit,
    },
  })
}

const stopTimer = (name) => (dispatch, getState) => {
  const state = getState()
  const timer = state.timer.timers[name]
  if (!isTimerExist(state, name) || !timer.intervalId) return

  dispatch({
    type   : types.TIMER_STOP,
    payload: {
      name,
      time: Date.now(),
    },
  })
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