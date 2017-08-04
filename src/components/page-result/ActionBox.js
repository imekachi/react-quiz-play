import React from 'react'
import { makeButtonWithState } from '../ButtonWithStates'

const ButtonShowAnswer = makeButtonWithState({
  injectDekButtonClass: false,

  tagName    : 'a',
  stateConfig: {
    ready: {

      html: 'ดูเฉลย<span class="_hidden-sm-down">คำตอบ</span>',
    },
  },
})

const ActionBox = (props) => {
  return (
    <div className="result-control">
      <a className="controlbutton -replay js-btn-replay" title="เล่นใหม่อีกครั้ง">
        <i className="fa fa-undo" aria-hidden={true}/> เล่นใหม่<span className="_hidden-sm-down">อีกครั้ง</span>
      </a>

      {props.quizType === 'supertest' && (
        <a className="controlbutton -getanswer" title="ดูเฉลยคำตอบ">
          <i className="fa fa-check-square-o" aria-hidden={true}/> ดูเฉลย<span className="_hidden-sm-down">คำตอบ</span>
        </a>
      )}

      <a className="controlbutton -create js-btn-create" title="สร้างควิซของคุณ">
        <i className="fa fa-plus" aria-hidden={true}/> สร้างควิซ<span className="_hidden-sm-down">ของคุณ</span>
      </a>
    </div>
  )
}

export default ActionBox