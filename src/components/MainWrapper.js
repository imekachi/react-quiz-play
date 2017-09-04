import React from 'react'
import styled from 'styled-components'

import { unitPercentage } from '../util/unit'
import Footer from './Footer'

const variables = {
  mainPadding: 10,
  breakPoint : {
    xs: 320,
  },
}

const QuizBody = styled.div`
  text-align: center;
  padding: 0 ${unitPercentage(variables.mainPadding / variables.breakPoint.xs)};
  
  @media (min-width: 640px) {
    padding: ${props => props.fullWidth ? '0' : '0 40px'};
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