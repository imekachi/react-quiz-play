import React from 'react'

// UI
import AutoShareBox from '../components/AutoShareBox'
import QuizProgress from '../components/page-play/QuizProgress'
import QuestionStream from '../components/page-play/QuestionStream'
import QuestionControl from '../components/page-play/QuestionControl'

// mockupData
const uiPageStore = {
  current  : 1,
  all      : 10,
  canGoBack: true,
}

const PlayPage = () => (
  <form id="quiz-submit-form" className="play-state">
    {/* Timer */}
    <QuizProgress uiPageStore={uiPageStore}/>
    <QuestionStream/>
    <QuestionControl uiPageStore={uiPageStore}/>

    <AutoShareBox id="autoshare-playpage" className="-formremark _txt-right"/>
  </form>
)

export default PlayPage