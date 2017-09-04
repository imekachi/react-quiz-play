import React from 'react'

import TimerChallenge from './timer-box/TimerChallenge'
import TimerNormal from './timer-box/TimerNormal'

const TimerSticky = (props) => {

  // put timer logic here
  props.timerData.timeLeft = props.timerData.limitTime

  return (
    <div className="timer-box-preserveheight">
      <div className="timer-box-sticky">
        {props.isChallengeMode ? <TimerChallenge {...props.timerData} userInfo={props.userInfo}/> :
         <TimerNormal {...props.timerData}/>}
      </div>
    </div>
  )
}

export default TimerSticky