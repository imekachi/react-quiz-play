import React from 'react'

import ResultBox from '../components/page-result/ResultBox'
import ShareBox from '../components/page-result/ShareBox'
import VoteBox from '../components/VoteBox'

const ResultPage = (props) => {
  const defaultResultProps = {
    isDescriptionCentered: true,
    isResultShared       : false,
  }

  return (
    <div className="result-body ended-state">
      <ResultBox  {...defaultResultProps} {...props}/>
      <ShareBox isChallengeMode={props.isChallengeMode} isMobile={props.isMobile}/>
      <VoteBox/>
    </div>
  )
}

export default ResultPage