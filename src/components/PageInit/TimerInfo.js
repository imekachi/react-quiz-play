import React from 'react'

import TimerNormal from '../PagePlay/timer-box/TimerNormal'

const timerConfig = {
  type: {
    each: 'ในแต่ละข้อ',
    all : '',
  },
}

const TimerInfo = (props) => {

  return (
    <div className="timer-message-box">
      <div className="header-wrapper">
        <span className="timertype _txt-underline">{timerConfig.type[props.type]}</span>
        <span className="header">คุณมีเวลาในการตอบคำถาม</span>
      </div>
      <TimerNormal noLabelBox limitTime={props.limitTime}/>
      <hr className="separator"/>
      <p className="description">
        ควิซทดสอบนี้มีการจำกัดเวลา<br/>
        เมื่อเริ่มทดสอบแล้วจะไม่สามารถหยุดเวลาได้
      </p>
    </div>
  )
}

export default TimerInfo