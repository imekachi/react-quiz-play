import React from 'react'

// Components
import Footer from './Footer'

const MainWrapper = (props) => (
  <div className="quiz-wrapper">
    <div className='quiz-container'>
      <div className="quiz-body">
        {props.pageToRender}
      </div>
      <Footer/>
    </div>
  </div>
)

export default MainWrapper