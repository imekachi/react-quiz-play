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

const QuestionControlBox = ({ pagingData, disableNext, onClickNext, onClickSubmit, onClickPrev }) => {
  const { currentPage, allPage, canGoBack } = pagingData

  const isVisiblePrev   = (canGoBack) && (allPage > 1) && (currentPage > 1)
  const isVisibleNext   = (allPage > 1) && (currentPage < allPage)
  const isVisibleSubmit = (currentPage === allPage)

  const disableNextClass = iF(disableNext, '-disabled')

  return (
    <div className={combineClassNames('question-control', iF(isVisibleSubmit, '-submit'))}>
      {isVisiblePrev && <PrevButton className={`controlbutton -prev`} onclick={onClickPrev}/>}
      {isVisibleNext && <NextButton className={`controlbutton -next ${disableNextClass}`} onClick={onClickNext}/>}
      {isVisibleSubmit && <SubmitButton className={`controlbutton -submit ${disableNextClass}`} onClick={onClickSubmit}/>}
    </div>
  )
}

export default QuestionControlBox