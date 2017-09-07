import { connect } from 'react-redux'

import TimerBoxComponent from '../components/PagePlay/TimerBox'
import { getIsMobile } from '../reducers/quiz'
import positionAware, { DOM_POSITION } from './positionAware'

const TimerBoxSticky = positionAware(positionData => {
  return {
    sticky: positionData.currentPosition === DOM_POSITION.ABOVE,
  }
})(TimerBoxComponent)

const mapStateToProps = (state) => {
  return {
    isMobile       : getIsMobile(state),
    isChallengeMode: state.quiz.quizInfo.isChallengeMode,
    timeLeft       : state.timer.timeLeft,
  }
}

export default connect(mapStateToProps)(TimerBoxSticky)