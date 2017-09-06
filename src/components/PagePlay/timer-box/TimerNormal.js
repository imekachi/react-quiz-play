import React from 'react'

import { iF } from '../../../util/condition'
import { strPadding } from '../../../util/format'
import { classNames } from '../../../util/string'
import { extractTimeFragments } from '../../../util/time'
import Icon from '../../Icon'

const TimerNormal = ({ timeLimit, withIcon, timeWarning = true }) => {
  const timeFragments      = extractTimeFragments(timeLimit)
  const timeFragmentsText  = { ...timeFragments }
  let timeWarningClassName = ''

  if (timeWarning && timeLimit > 0) {
    switch (true) {
      case timeLimit < 6000: {
        timeWarningClassName = '-danger'
        break
      }
      case timeLimit < 10000: {
        timeWarningClassName = '-warning'
        break
      }
      default:
        break
    }
  }

  for (let [key, value] of Object.entries(timeFragmentsText)) {
    timeFragmentsText[key] = strPadding(value, 2, '0')
  }

  return (
    <div className="timer-box-wrapper _hidden-mode-challenge">
      {withIcon && (
        <div className="label-box">
          <div className="text -label">เหลือเวลา</div>
          <div className="text -time"><Icon className="fa-clock-o"/></div>
        </div>
      )}
      <div className={classNames('timer-box', iF(!withIcon, '-fullwidth'))}>
        <div className="label-row row-box">
          <span className="time -hour">ชั่วโมง</span>
          <span className="time -minute">นาที</span>
          <span className="time -second">วินาที</span>
        </div>
        <div className={classNames('timer-row row-box', timeWarningClassName)}>
          <span className={classNames('time -hour', iF(timeFragments.hour <= 0, '-timeout'))}>
            {timeFragmentsText.hour}
          </span>
          <span className={classNames('time -minute', iF(timeFragments.minute <= 0, '-timeout'))}>
            {timeFragmentsText.minute}
          </span>
          <span className={classNames('time -second', iF(timeFragments.second <= 0, '-timeout'))}>
            {timeFragmentsText.second}
          </span>
        </div>
      </div>
    </div>
  )
}

export default TimerNormal