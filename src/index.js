import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import QuizApp from './containers/QuizApp'
import registerServiceWorker from './registerServiceWorker'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <QuizApp/>
  </Provider>

  , document.getElementById('quiz-play-app'),
)
registerServiceWorker()
