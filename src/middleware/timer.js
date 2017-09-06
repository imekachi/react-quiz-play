import { actions as timerActions, TIMER_STEP, types } from '../reducers/timer'

export const timerMiddleware = store => next => action => {
  const state = store.getState()
  switch (action.type) {
    case types.TIMER_START: {
      // Ticking overtime
      action.intervalId = setInterval(() => {
        store.dispatch(timerActions.tickTimer(action.payload.name, TIMER_STEP))
      }, TIMER_STEP)
      break
    }

    case types.TIMER_TICK: {
      // console.log('>> TICK: ')
      // auto stop
      if (state.timer.timeLeft <= TIMER_STEP) {
        next(action)
        return store.dispatch(timerActions.stopTimer(action.payload.name))
      }
      break
    }

    case types.TIMER_STOP: {
      const timer = state.timer.timers[action.payload.name]
      timer && clearInterval(timer.intervalId)
      break
    }

    default:
      break
  }

  next(action)
}

export default timerMiddleware