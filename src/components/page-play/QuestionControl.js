import React from 'react'

import { makeButtonWithState } from '../ButtonWithStates'

const PrevButton = makeButtonWithState({
  stateConfig: {
    ready: {
      icon: 'fa-arrow-left _icon-size',
      text: 'ข้อก่อนหน้า',
    },
  },
})

const NextButton = makeButtonWithState({
  stateConfig: {
    ready: {
      icon       : 'fa-arrow-right _icon-size',
      iconOnRight: true,
      text       : 'ข้อถัดไป',
    },
  },
})

const SubmitButton = makeButtonWithState({
  stateConfig: {
    ready: {
      icon: 'fa-arrow-right _icon-size',
      iconOnRight: true,
      text: 'ข้อก่อนหน้า',
    },
  },
})

const QuestionControlBox = (props) => {
  const uiStore = props.uiPageStore

  const isVisiblePrev   = (uiStore.canGoBack) && (uiStore.all > 1) && (uiStore.current > 1)
  const isVisibleNext   = (uiStore.all > 1) && (uiStore.current < uiStore.all)
  const isVisibleSubmit = (uiStore.current === uiStore.all)

  return (
    <div className={`question-control ${ isVisibleSubmit ? '-submit' : ''}`}>
      {isVisiblePrev && <PrevButton className="controlbutton -prev"/>}
      {isVisibleNext && <NextButton className="controlbutton -next"/>}
      {isVisibleSubmit && <SubmitButton className="controlbutton -submit"/>}
    </div>
  )
}

export default QuestionControlBox