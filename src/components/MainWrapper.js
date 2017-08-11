import React from 'react'

// Components
import QuizApp from '../containers/QuizApp'
import Footer from './Footer'

const MainWrapper = (props) => (
  <div className="quiz-wrapper">
    <div className='quiz-container'>
      <QuizApp {...props.quizInfo}/>
      <Footer/>
    </div>
  </div>
)

export default MainWrapper