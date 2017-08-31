import React from 'react'
import styled from 'styled-components'

import Footer from './Footer'

const QuizBody = styled.div`
  @media (min-width: 640px) {
    ${props => props.fullWidth && 'padding: 0 !important;'}
  }
`

const MainWrapper = ({ fullWidth, children }) => (
  <div className="quiz-wrapper">
    <div className='quiz-container'>
      <QuizBody className="quiz-body" fullWidth={fullWidth}>
        {children}
      </QuizBody>
      <Footer fullWidth={fullWidth}/>
    </div>
  </div>
)

export default MainWrapper