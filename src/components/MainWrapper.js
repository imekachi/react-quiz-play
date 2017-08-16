import React from 'react'

// Components
import Footer from './Footer'

const MainWrapper = ({ pageToRender }) => (
  <div className="quiz-wrapper">
    <div className='quiz-container'>
      <div className="quiz-body">
        {pageToRender}
      </div>
      <Footer/>
    </div>
  </div>
)

export default MainWrapper