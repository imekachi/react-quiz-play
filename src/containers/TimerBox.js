import { connect } from 'react-redux'

import TimerBoxComponent from '../components/PagePlay/TimerBox'
import { getIsMobile } from '../reducers/quiz'
import positionAware from './positionAware'

const DOM_POSITION = {
  INSIDE: 'INSIDE',
  ABOVE : 'ABOVE',
}

const TimerBoxSticky = positionAware((domRect, ownProps, ownState) => {
  const currentPosition = domRect.top < 0 ? DOM_POSITION.ABOVE : DOM_POSITION.INSIDE
  return {
    position             : currentPosition,
    sticky               : currentPosition === DOM_POSITION.ABOVE,
    shouldComponentUpdate: ownState.position !== currentPosition,
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