import React from 'react'

import QuestionStream from '../../containers/QuestionStream'
import QuizProgress from '../../containers/QuizProgress'
import TimerBox from '../../containers/TimerBox'
import AutoShareBox from '../AutoShareBox'
import QuestionControl from './QuestionControl'

const PagePlayComponent = (props) => {
  const { onClickPrev, onClickNext, onClickSubmit, handleSubmit } = props
  return (
    <form className="play-state" onSubmit={handleSubmit}>
      {props.enableTimer && (
        <TimerBox/>
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