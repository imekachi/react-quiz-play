import React from 'react'
// Data
import QuestionStream from '../../containers/QuestionStream'
// UI
import AutoShareBox from '../AutoShareBox'
import QuizProgress from './QuizProgress'
import QuestionControl from './QuestionControl'
import TimerSticky from './TimerSticky'

const PagePlayComponent = (props) => {
  const onFormSubmit = (data) => {
    window.alert(`You submitted:\n\n${JSON.stringify(data, null, 2)}`)
  }

  const { pagingData, enableTimer, isSingleQuestion, disableNext, onClickPrev, onClickNext, onClickSubmit, handleSubmit } = props
  return (
    <form className="play-state" onSubmit={handleSubmit(onFormSubmit)}>
      {false && (enableTimer) && (
        <TimerSticky/>
      )}
      {false && isSingleQuestion && (
        <QuizProgress/>
      )}

      <QuestionStream/>

      <QuestionControl pagingData={pagingData} disableNext={disableNext} {...{
        onClickPrev,
        onClickNext,
        onClickSubmit,
      }}/>

      <AutoShareBox id="autoshare-playpage" className="-formremark _txt-right"/>
    </form>
  )
}

export default PagePlayComponent