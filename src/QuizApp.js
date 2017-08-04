import React from 'react'

// UI
import Body from './components/Body'
import Footer from './components/Footer'

export default class QuizApp extends React.Component {

  render() {
    return (
      <div className="quiz-wrapper">
        <div className={`quiz-container ${ this.props.appState === 'init' ? '-initial' : '-gameplay' }`}>
          <Body appState={this.props.appState}/>
          <Footer/>
        </div>
      </div>
    )
  }
}