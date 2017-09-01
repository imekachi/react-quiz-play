import React from 'react'
import '../../public/css/quiz-play.css'
import MainWrapper from '../components/MainWrapper'

export const OuterWrapper = (props) => (
  <div className="main-wrapper">
    <div className="main-container">
      <div className="quiz-content-box">
        <div id="banner-zone-top"/>
        <MainWrapper>
          {props.children}
        </MainWrapper>
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