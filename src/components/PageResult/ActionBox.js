import React from 'react'
import { QUIZ_TYPES } from '../../constants/quiz'

import Icon from '../Icon'
import { makeButtonWithStates } from '../ButtonWithStates'

const ButtonShowAnswer = makeButtonWithStates({
  injectDekDButtonClass: false,

  tagName    : 'a',
  stateConfig: {
    ready: {
      title: 'ดูเฉลยคำตอบ',
      html : (
        <span>
          <Icon className="fa-check-square-o"/> ดูเฉลย<span className="_hidden-sm-down">คำตอบ</span>
        </span>
      ),
    },
  },
})

const ActionBox = (props) => {
  const { quizType } = props
  return (
    <div className="result-control">
      <a className="controlbutton -replay js-btn-replay" title="เล่นใหม่อีกครั้ง">
        <Icon className="fa-undo"/> เล่นใหม่<span className="_hidden-sm-down">อีกครั้ง</span>
      </a>

      {quizType === QUIZ_TYPES.SUPERTEST && (
        <ButtonShowAnswer className="controlbutton -getanswer"/>
      )}

      <a className="controlbutton -create js-btn-create" title="สร้างควิซของคุณ">
        <Icon className="fa-plus"/> สร้างควิซ<span className="_hidden-sm-down">ของคุณ</span>
      </a>
    </div>
  )
}

export default ActionBox