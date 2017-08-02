import React from 'react'
import '../../public/css/quiz-play.css'
import Footer from '../components/Footer'

const MockupWrapper = (props) => (
  <div className="main-wrapper">
    <div className="main-container">
      <div className="quiz-content-box">
        <div id="banner-zone-top"/>
        <div className="quiz-wrapper">
          <div className={`quiz-container ${ props.appState === 'play' ? '-gameplay' : '-initial'}`}>
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

export default MockupWrapper