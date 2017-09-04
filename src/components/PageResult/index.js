import React from 'react'

import VoteBox from '../VoteBox'
import ResultBox from './ResultBox'
import ShareBox from './ShareBox'

const ResultPageComponent = (props) => {
  const { resultData, isResultShared, isChallengeMode, isMobile, quizType } = props
  return (
    <div className="result-body ended-state">
      <ResultBox {...resultData} isResultShared={isResultShared} quizType={quizType}/>
      <ShareBox isChallengeMode={isChallengeMode} isMobile={isMobile}/>
      <VoteBox/>
    </div>
  )
}

export default ResultPageComponent