import React from 'react'

import { makeButtonWithStates } from '../ButtonWithStates'
import { iF } from '../../util/condition'
import { combineClassNames } from '../../util/string'

const PrevButton = makeButtonWithStates({
  stateConfig: {
    ready: {
      icon: 'fa-arrow-left _icon-size',
      text: 'ข้อก่อนหน้า',
    },
  },
})

const NextButton = makeButtonWithStates({
  stateConfig: {
    ready: {
      icon       : 'fa-arrow-right _icon-size',
      iconOnRight: true,
      text       : 'ข้อถัดไป',
    },
  },
})

const SubmitButton = makeButtonWithStates({
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

  const disabledBtn = iF(props.disabled, '-disabled')

  return (
    <div className={combineClassNames('question-control', iF(isVisibleSubmit, '-submit'))}>
      {isVisiblePrev && <PrevButton className={`controlbutton -prev ${disabledBtn}`}/>}
      {isVisibleNext && <NextButton className={`controlbutton -next ${disabledBtn}`}/>}
      {isVisibleSubmit && <SubmitButton className={`controlbutton -submit ${disabledBtn}`}/>}
    </div>
  )
}

export default QuestionControlBox