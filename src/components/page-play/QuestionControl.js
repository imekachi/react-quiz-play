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
      icon       : 'fa-check _icon-size',
      iconOnRight: true,
      text       : 'ส่งคำตอบ',
    },
  },
})

const QuestionControlBox = (props) => {
  const uiStore = props.uiPageStore

  const isVisiblePrev   = (uiStore.canGoBack) && (uiStore.allPage > 1) && (uiStore.currentPage > 1)
  const isVisibleNext   = (uiStore.allPage > 1) && (uiStore.currentPage < uiStore.allPage)
  const isVisibleSubmit = (uiStore.currentPage === uiStore.allPage)

  return (
    <div className={`question-control ${ isVisibleSubmit ? '-submit' : ''}`}>
      {isVisiblePrev && <PrevButton className="controlbutton -prev"/>}
      {isVisibleNext && <NextButton className="controlbutton -next"/>}
      {isVisibleSubmit && <SubmitButton className="controlbutton -submit"/>}
    </div>
  )
}

export default QuestionControlBox