import { connect } from 'react-redux'

import TimerBoxComponent from '../components/PagePlay/TimerBox'

const mapStateToProps = (state) => {
  return {
    isChallengeMode: state.quiz.quizInfo.isChallengeMode,
    timeLeft      : state.timer.timeLeft,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(TimerBoxComponent)