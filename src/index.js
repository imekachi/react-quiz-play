import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import QuizApp from './containers/QuizApp'
import store from './store'

import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <Provider store={store}>
    <QuizApp/>
  </Provider>

  , document.getElementById('quiz-play-app'),
)
registerServiceWorker()
