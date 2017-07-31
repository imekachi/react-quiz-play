import React from 'react'

import AutoShareBox from '../components/AutoShareBox'
import QuestionStream from '../components/page-play/QuestionStream'

const PlayPage = () => (
  <form id="quiz-submit-form" className="play-state">
    {/* Timer */}
    {/* ProgressBar */}
    {/* QuestionStream */}
    {/* QuestionControl */}
    <QuestionStream/>

    <AutoShareBox id="autoshare-playpage" className="-formremark _txt-right"/>
  </form>
)

export default PlayPage