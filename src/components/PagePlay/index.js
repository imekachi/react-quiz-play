import React from 'react'

// UI
import AutoShareBox from '../AutoShareBox'
import QuizProgress from './QuizProgress'
import QuestionStream from './QuestionStream'
import QuestionControl from './QuestionControl'
import TimerSticky from './TimerSticky'

const PagePlayComponent = (props) => {

  const defaultUiPageStore = {
    currentPage: 1,
    allPage    : Math.ceil(props.questionData.questionCount / props.questionData.questionPerPage),
    canGoBack  : true,
  }

  const uiPageStore = { ...defaultUiPageStore, ...props.uiPageStore }

  return (
    <form id="quiz-submit-form" className="play-state">
      {(props.timerData.isTimeLimited) && (
        <TimerSticky isChallengeMode={props.isChallengeMode} timerData={props.timerData} userInfo={props.userInfo}/>
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

export default PagePlayComponent