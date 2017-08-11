import { applyMiddleware, createStore, compose } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import reducer from './reducers'

const debug = true

const middleware        = applyMiddleware(thunk, createLogger())
const composeEnhancers  = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const composeMiddleWare = composeEnhancers(middleware)

export default debug ? createStore(reducer, composeMiddleWare) : createStore(reducer, middleware)