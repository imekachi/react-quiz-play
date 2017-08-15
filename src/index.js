import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import QuizApp from './containers/QuizApp'
import store from './store'

import registerServiceWorker from './registerServiceWorker'

const quizInfo = {
  id      : 58518,
  quizType: 'supertest',
}

ReactDOM.render(
  <Provider store={store}>
    <QuizApp quizInfo={quizInfo}/>
  </Provider>

  , document.getElementById('quiz-play-app'),
)
registerServiceWorker()
