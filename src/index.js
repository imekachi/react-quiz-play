import React from 'react'
import ReactDOM from 'react-dom'

import QuizApp from './QuizApp'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<QuizApp appState="result"/>, document.getElementById('quiz-play-app'))
registerServiceWorker()
