import { combineReducers } from 'redux'

import quiz from './quiz'
import auth from './auth'
import runtime from './runtime'

export default combineReducers({
  quiz,
  auth,
  runtime,
})