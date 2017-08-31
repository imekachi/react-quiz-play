import React from 'react'

import QuizProgress from '../../containers/QuizProgress'
import TimerSticky from './TimerSticky'
import QuestionStream from '../../containers/QuestionStream'
import QuestionControl from './QuestionControl'
import AutoShareBox from '../AutoShareBox'

const PagePlayComponent = (props) => {
  const { onClickPrev, onClickNext, onClickSubmit, handleSubmit} = props
  return (
    <form className="play-state" onSubmit={handleSubmit}>
      {false && (props.enableTimer) && (
        <TimerSticky/>
      )}
      {props.isSingleQuestion && (
        <QuizProgress noSpaceBottom/>
      )}

      <QuestionStream/>

      <QuestionControl
        pagingData={props.pagingData}
        disableNext={props.disableNext}
        submitting={props.submitting}
        {...{
          onClickPrev,
          onClickNext,
          onClickSubmit,
        }}/>

      <AutoShareBox id="autoshare-playpage" className="-formremark _txt-right"/>
    </form>
  )
}

export default PagePlayComponent