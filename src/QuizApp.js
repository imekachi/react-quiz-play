import React from 'react'

// UI
import Body from './components/Body'
import Footer from './components/Footer'
import { combineClassNames } from './util/string'

export default class QuizApp extends React.Component {
  render() {

    // TODO: remove this and css display none controlling codes
    const mapStateToClassName = {
      init: 'initial',
      play: 'gameplay',
      end : 'ended',
    }

    return (
      <div className="quiz-wrapper">
        <div className={combineClassNames(
          'quiz-container',
          `-${mapStateToClassName[this.props.appState]}`,
        )}>
          <Body appState={this.props.appState}/>
          <Footer/>
        </div>
      </div>
    )
  }
}