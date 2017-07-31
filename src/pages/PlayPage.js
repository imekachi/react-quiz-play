import React from 'react'

// UI
import AutoShareBox from '../components/AutoShareBox'
import QuizProgress from '../components/page-play/QuizProgress'
import QuestionStream from '../components/page-play/QuestionStream'

// mockupData
const uiPageStore = {
  current: 1,
  all: 10,
}

const PlayPage = () => (
  <form id="quiz-submit-form" className="play-state">
    {/* Timer */}
    <QuizProgress uiPageStore={uiPageStore}/>
    <QuestionStream/>
    {/* QuestionControl */}

    <AutoShareBox id="autoshare-playpage" className="-formremark _txt-right"/>
  </form>
)

export default PlayPage