import React from 'react'
import '../../public/css/quiz-play.css'
import Footer from '../components/Footer'

export const OuterWrapper = (props) => (
  <div className="main-wrapper">
    <div className="main-container">
      <div className="quiz-content-box">
        <div id="banner-zone-top"/>
        <div className="quiz-wrapper">
          <div className="quiz-container">
            <div className="quiz-body">
              {props.children}
            </div>
            <Footer/>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export const PlayPageWrapper = (props) => (
  <form className="play-state">
    {props.children}
  </form>
)

export const generateWrapper = (Component = OuterWrapper) => {
  return (story) => <Component>{story()}</Component>
}

export default OuterWrapper