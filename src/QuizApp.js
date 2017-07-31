import React from 'react'

// UI
import Body from './components/Body'
import Footer from './components/Footer'

const quizUIStore = {
  appState: 'play',
}

export default class QuizApp extends React.Component {

  render() {
    return (
      <div className="quiz-wrapper">
        <div className={`quiz-container ${ quizUIStore.appState === 'play' ? '-gameplay' : '-initial'}`}>
          <Body quizUIStore={quizUIStore}/>
          <Footer/>
        </div>
      </div>
    )
  }
}