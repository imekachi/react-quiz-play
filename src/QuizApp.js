import React from 'react'

// UI
import Body from './components/Body'
import Footer from './components/Footer'

export default class QuizApp extends React.Component {

  render() {
    return (
      <div className="quiz-wrapper">
        <div className="quiz-container">
          <Body/>
          <Footer/>
        </div>
      </div>
    )
  }
}
