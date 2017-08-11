import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import MainWrapper from './components/MainWrapper'
import store from './store'

import registerServiceWorker from './registerServiceWorker'

const quizInfo = {
  id      : 58518,
  quizType: 'supertest',
}

ReactDOM.render(
  <Provider store={store}>
    <MainWrapper quizInfo={quizInfo}/>
  </Provider>

  , document.getElementById('quiz-play-app'),
)
registerServiceWorker()
