import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import auth from './auth'
import quiz from './quiz'
import result from './result'
import runtime from './runtime'
import timer from './timer'

export default combineReducers({
  quiz,
  auth,
  runtime,
  result,
  timer,
  form: formReducer,
})