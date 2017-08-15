import React from 'react'

import { numberFormat } from '../../../util/format'
import { unitPercentage } from '../../../util/unit'

import ImageBg from '../../ImageBg'

const TimerChallenge = (props) => {
  let { userInfo } = props

  const getTimerDistance = () => {
    return unitPercentage(props.limitTime / props.timeLeft)
  }

  return (
    <div className="challenge-info-bar table-cell-wrapper -vertical-middle">
      <section className="section-user-info table-cell">
        <div className="user-info table-cell-wrapper -vertical-middle">
          <div className="profile-img-wrapper table-cell" title="{{name}}">
            <ImageBg className="_ratio-scale-square _bg-size-cover" src={userInfo.profileImage}/>
          </div>
          <div className="info-wrapper table-cell">
            <div className="name _txt-ellipsis js-user-name" title="{{name}}">{userInfo.name}</div>
            <div className="score _txt-ellipsis js-user-score" title="0 คะแนน" data-score="0">{numberFormat(userInfo.score)}</div>
          </div>
        </div>

      </section>
      <section className="section-timer table-cell">
        <div className="timer-wrapper table-cell-wrapper -vertical-middle">
          <div className="timer-label table-cell" title={`จำกัดเวลา ${props.limitTime} วินาที`}>
            <i className="fa fa-clock-o" aria-hidden={true}/>
          </div>
          <div className="timer-bar-wrapper table-cell">
            <div className="timer-bar">
              <div className="thumb" style={{width: getTimerDistance()}}/>
              <div className="timer-pointer" style={{left: getTimerDistance()}}>
                <span className="pointer _animated -wobble -infinite"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TimerChallenge