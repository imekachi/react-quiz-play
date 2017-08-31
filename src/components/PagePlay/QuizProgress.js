import React from 'react'
import styled from 'styled-components'

import { unitPercentage } from '../../util/unit'
import { capBetween } from '../../util/number'

const ProgressBar = styled.div`
  ${props => props.noSpaceBottom && 'border-radius: 3px 3px 0 0 !important;'}
`

const QuizProgressComponent = (props) => {
  const { currentPage, allPage, noSpaceBottom } = props

  const distance   = unitPercentage(capBetween(0, currentPage / allPage, 1))
  const bubbleText = `${currentPage}/${allPage}`

  return (
    <div className="quiz-progress-wrapper">
      <div className="quiz-progress">
        <div className="progressbubble"
             style={{ left: distance }}
             ref={bubbleElement => this.bubbleElement = bubbleElement}>
          {bubbleText}
        </div>
        <ProgressBar className="progress-bar" noSpaceBottom={noSpaceBottom}>
          <div className="progress" style={{ width: distance }}/>
        </ProgressBar>
      </div>
    </div>
  )
}

export default QuizProgressComponent