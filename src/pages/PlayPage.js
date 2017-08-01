import React from 'react'

// UI
import AutoShareBox from '../components/AutoShareBox'
import QuizProgress from '../components/page-play/QuizProgress'
import QuestionStream from '../components/page-play/QuestionStream'
import QuestionControl from '../components/page-play/QuestionControl'

const PlayPage = (props) => {

  const uiPageStore = {
    currentPage: 1,
    allPage    : Math.ceil(props.questionData.questionCount / props.questionData.questionPerPage),
    canGoBack  : true,
  }

  return (
    <form id="quiz-submit-form" className="play-state">
      {/* Timer */}
      {(props.questionData.questionPerPage <= 1) && <QuizProgress uiPageStore={uiPageStore}/>}
      <QuestionStream currentPage={uiPageStore.currentPage} questionData={props.questionData} choiceData={props.choiceData}/>
      <QuestionControl uiPageStore={uiPageStore}/>

      <AutoShareBox id="autoshare-playpage" className="-formremark _txt-right"/>
    </form>
  )
}

export default PlayPage