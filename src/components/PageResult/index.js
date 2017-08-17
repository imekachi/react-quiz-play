import React from 'react'

import ResultBox from './ResultBox'
import ShareBox from './ShareBox'
import VoteBox from '../VoteBox'

const ResultPageComponent = (props) => {
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

export default ResultPageComponent