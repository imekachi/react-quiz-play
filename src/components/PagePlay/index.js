import React from 'react'

// Data
import QuestionStream from '../../containers/QuestionStream'

// UI
import AutoShareBox from '../AutoShareBox'
import QuizProgress from './QuizProgress'
import QuestionControl from './QuestionControl'
import TimerSticky from './TimerSticky'

const PagePlayComponent = ({ pagingData, enableTimer, onClickPrev, onClickNext, onClickSubmit }) => {
  return (
    <form id="quiz-submit-form" className="play-state">
      {false && (enableTimer) && (
        <TimerSticky/>
      )}
      {false && (pagingData.questionPerPage <= 1) && (
        <QuizProgress/>
      )}

      <QuestionStream/>

      <QuestionControl pagingData={pagingData} enableNext={false} {...{onClickPrev, onClickNext, onClickSubmit}}/>

      <AutoShareBox id="autoshare-playpage" className="-formremark _txt-right"/>
    </form>
  )
}

export default PagePlayComponent