import React from 'react'

import TimerNormal from './timer-box/TimerNormal'
import TimerChallenge from './timer-box/TimerChallenge'

const TimerSticky = (props) => {

  // put timer logic here

  return (
    <div className="timer-box-preserveheight">
      <div className="timer-box-sticky">
        {props.isChallengeMode ? <TimerChallenge {...props.timerData}/> : <TimerNormal {...props.timerData}/>}
      </div>
    </div>
  )
}

export default TimerSticky