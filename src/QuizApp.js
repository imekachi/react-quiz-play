import React from 'react'

// UI
import Body from './components/Body'
import Footer from './components/Footer'
import { combineClassNames } from './util/string'
import { iF } from './util/condition'

export default class QuizApp extends React.Component {

  render() {
    return (
      <div className="quiz-wrapper">
        <div className={combineClassNames(
          'quiz-container',
          iF(this.props.appState === 'init', '-initial', '-gameplay'),
        )}>
          <Body appState={this.props.appState}/>
          <Footer/>
        </div>
      </div>
    )
  }
}