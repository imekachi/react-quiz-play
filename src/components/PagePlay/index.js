import React from 'react'
// Data
import QuestionStream from '../../containers/QuestionStream'
// UI
import AutoShareBox from '../AutoShareBox'
import QuizProgress from './QuizProgress'
import QuestionControl from './QuestionControl'
import TimerSticky from './TimerSticky'

const PagePlayComponent = (props) => {
  const { onClickPrev, onClickNext, onClickSubmit, handleSubmit, onFormSubmit } = props
  return (
    <form className="play-state" onSubmit={handleSubmit(onFormSubmit)}>
      {false && (props.enableTimer) && (
        <TimerSticky/>
      )}
      {false && props.isSingleQuestion && (
        <QuizProgress/>
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