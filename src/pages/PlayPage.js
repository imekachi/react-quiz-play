import React from 'react'

// UI
import AutoShareBox from '../components/AutoShareBox'
import QuizProgress from '../components/page-play/QuizProgress'
import QuestionStream from '../components/page-play/QuestionStream'
import QuestionControl from '../components/page-play/QuestionControl'
import TimerSticky from '../components/page-play/TimerSticky'

const PlayPage = (props) => {

  const defaultUiPageStore = {
    currentPage: 1,
    allPage    : Math.ceil(props.questionData.questionCount / props.questionData.questionPerPage),
    canGoBack  : true,
  }

  const uiPageStore = { ...defaultUiPageStore, ...props.uiPageStore }

  return (
    <form id="quiz-submit-form" className="play-state">
      {(props.timerData.isTimeLimited) && (
        <TimerSticky isChallengeMode={props.isChallengeMode} timerData={props.timerData}/>
      )}
      {(props.questionData.questionPerPage <= 1) && (
        <QuizProgress uiPageStore={uiPageStore}/>
      )}
      <QuestionStream currentPage={uiPageStore.currentPage} questionData={props.questionData}
                      choiceData={props.choiceData}/>
      <QuestionControl uiPageStore={uiPageStore}/>

      <AutoShareBox id="autoshare-playpage" className="-formremark _txt-right"/>
    </form>
  )
}

export default PlayPage