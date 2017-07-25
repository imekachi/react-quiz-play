import React from 'react'

import { extractTimeFractions } from '../../util/time'
import { strPadding } from '../../util/format'

const timerConfig = {
  type: {
    each: 'ในแต่ละข้อ',
    all : '',
  },
}

const TimerInfo = (props) => {

  const timeFractions = extractTimeFractions(props.limitTime)
  for (let [key, value] of Object.entries(timeFractions)) {
    timeFractions[key] = strPadding(value, 2, '0')
  }

  return (
    <div className="timer-message-box">
      <div className="header-wrapper">
        <span className="timertype _txt-underline">{timerConfig.type[props.type]}</span>
        <span className="header">คุณมีเวลาในการตอบคำถาม</span>
      </div>
      <div className="timer-box-wrapper">
        <div className="timer-box -fullwidth">
          <div className="label-row row-box">
            <span className="time -hour">ชั่วโมง</span>
            <span className="time -minute">นาที</span>
            <span className="time -second">วินาที</span>
          </div>
          <div className="timer-row row-box">
            <span className="time -hour -timeout">{timeFractions.hour}</span>
            <span className="time -minute -timeout">{timeFractions.minute}</span>
            <span className="time -second ">{timeFractions.second}</span>
          </div>
        </div>
      </div>
      <hr className="separator"/>
      <p className="description">
        ควิซทดสอบนี้มีการจำกัดเวลา<br/>
        เมื่อเริ่มทดสอบแล้วจะไม่สามารถหยุดเวลาได้
      </p>
    </div>
  )
}

export default TimerInfo