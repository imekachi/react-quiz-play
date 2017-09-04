import React from 'react'

import { iF } from '../../../util/condition'
import { strPadding } from '../../../util/format'
import { extractTimeFragments } from '../../../util/time'
import Icon from '../../Icon'

const TimerNormal = (props) => {

  const timeFragments   = extractTimeFragments(props.limitTime)
  let timeFragmentsText = { ...timeFragments }

  for (let [key, value] of Object.entries(timeFragmentsText)) {
    timeFragmentsText[key] = strPadding(value, 2, '0')
  }

  return (
    <div className="timer-box-wrapper _hidden-mode-challenge">
      {!props.noLabelBox && (
        <div className="label-box">
          <div className="text -label">เหลือเวลา</div>
          <div className="text -time"><Icon className="fa-clock-o"/></div>
        </div>
      )}
      <div className={`timer-box ${iF(props.noLabelBox, '-fullwidth')}`}>
        <div className="label-row row-box">
          <span className="time -hour">ชั่วโมง</span>
          <span className="time -minute">นาที</span>
          <span className="time -second">วินาที</span>
        </div>
        <div className="timer-row row-box">
          <span className={`time -hour ${iF(timeFragments <= 0, '-timeout')}`}>{timeFragmentsText.hour}</span>
          <span className={`time -minute ${iF(timeFragments <= 0, '-timeout')}`}>{timeFragmentsText.minute}</span>
          <span className={`time -second`}>{timeFragmentsText.second}</span>
        </div>
      </div>
    </div>
  )
}

export default TimerNormal