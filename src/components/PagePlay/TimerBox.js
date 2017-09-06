import React from 'react'

import TimerChallenge from './timer-box/TimerChallenge'
import TimerNormal from './timer-box/TimerNormal'

const TimerBoxComponent = ({ timeLeft, isChallengeMode, userInfo }) => {
  return (
    <div className="timer-box-preserveheight">
      <div className="timer-box-sticky">
        {false && isChallengeMode
          ? <TimerChallenge timeLimit={timeLeft} userInfo={userInfo}/>
          : <TimerNormal withIcon timeLimit={timeLeft}/>}
      </div>
    </div>
  )
}

export default TimerBoxComponent