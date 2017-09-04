import { applyMiddleware, compose, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import reducer from './reducers'

const debug   = true
const logging = false

const middlewareWithLog = applyMiddleware(
  thunk,
  createLogger({
    predicate: (getState, action) => !((/^(@@redux-form)/g).test(action.type)), // log everything expect @@redux-form
  }),
)
const middlewareNoLog   = applyMiddleware(thunk)
const middleware        = logging ? middlewareWithLog : middlewareNoLog

const composeEnhancers  = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const composeMiddleWare = composeEnhancers(middleware)

export default debug ? createStore(reducer, composeMiddleWare) : createStore(reducer, middleware)