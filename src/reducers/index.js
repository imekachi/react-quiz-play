import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import quiz from './quiz'
import auth from './auth'
import runtime from './runtime'
import result from './result'

export default combineReducers({
  quiz,
  auth,
  runtime,
  result,
  form: formReducer,
})