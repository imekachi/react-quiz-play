import React from 'react'

// Components
import Footer from './Footer'

const MainWrapper = ({ children }) => (
  <div className="quiz-wrapper">
    <div className='quiz-container'>
      <div className="quiz-body">
        {children}
      </div>
      <Footer/>
    </div>
  </div>
)

export default MainWrapper