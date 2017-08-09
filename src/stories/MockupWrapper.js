import React from 'react'
import '../../public/css/quiz-play.css'
import Footer from '../components/Footer'
import { combineClassNames } from '../util/string'

const mapStateToClassName = {
  init: 'initial',
  play: 'gameplay',
  end : 'ended',
}

const MockupWrapper = (props) => (
  <div className="main-wrapper">
    <div className="main-container">
      <div className="quiz-content-box">
        <div id="banner-zone-top"/>
        <div className="quiz-wrapper">
          <div className={combineClassNames(
            'quiz-container',
            `-${mapStateToClassName[props.appState]}`,
          )}>
            <div className={`quiz-body ${ props.singleQuestion ? '-singlequestion' : ''}`}>
              {props.children}
            </div>
            <Footer/>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export const generateWrapper = (config) => {
  config = {
    appState      : 'init',
    singleQuestion: true,
    ...config
  }
  return (story) => <MockupWrapper {...config}>{story()}</MockupWrapper>
}

export default MockupWrapper