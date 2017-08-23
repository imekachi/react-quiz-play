import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import quiz from './quiz'
import auth from './auth'
import runtime from './runtime'

export default combineReducers({
  quiz,
  auth,
  runtime,
  form: formReducer,
})