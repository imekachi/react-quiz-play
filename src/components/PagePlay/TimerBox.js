import React from 'react'

import { classNames } from '../../util/string'
import TimerChallenge from './timer-box/TimerChallenge'
import TimerNormal from './timer-box/TimerNormal'

const TimerBoxComponent = (props) => {
  const { timeLeft, sticky, isChallengeMode, userInfo, connectRefDOM, isMobile } = props
  return (
    <div className="timer-box-preserveheight" ref={connectRefDOM}>
      <div className={classNames('timer-box-sticky', sticky && '-stick')}>
        {false && isChallengeMode
          ? <TimerChallenge timeLimit={timeLeft} userInfo={userInfo}/>
          : <TimerNormal withIcon timeLimit={timeLeft} modeMini={isMobile}/>}
      </div>
    </div>
  )
}

export default TimerBoxComponent