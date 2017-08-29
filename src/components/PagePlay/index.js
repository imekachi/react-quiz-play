import React from 'react'
// Data
import QuestionStream from '../../containers/QuestionStream'
// UI
import AutoShareBox from '../AutoShareBox'
import QuizProgress from './QuizProgress'
import QuestionControl from './QuestionControl'
import TimerSticky from './TimerSticky'

const PagePlayComponent = (props) => {
  // console.log('>> PagePlayComponent props: ', props)
  const reduxForm = {
    handleSubmit: props.handleSubmit,
  }

  const { pagingData, enableTimer, isSingleQuestion, disableNext, onClickPrev, onClickNext, onClickSubmit, onFormSubmit } = props
  return (
    <form className="play-state" onSubmit={reduxForm.handleSubmit(onFormSubmit)}>
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