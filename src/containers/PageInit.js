import { connect } from 'react-redux'
// DATA
import { actions as quizActions } from '../reducers/quiz'
import { getIsFBLoading, getIsLogin, getLoggedInType } from '../reducers/auth'
// UI
import PageInitComponent from '../components/PageInit'

const mapStateToProps = (state) => {
  const { quizCover, timerData, isNotFound, isAccessible, description } = state.quiz.quizInfo

  return {
    quizCover,
    timerData,
    isNotFound,
    isAccessible,
    description,
    auth: {
      isLogin     : getIsLogin(state),
      isFBLoading : getIsFBLoading(state),
      loggedInType: getLoggedInType(state),
    },
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    playClickHandler: () => dispatch(quizActions.start()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageInitComponent)