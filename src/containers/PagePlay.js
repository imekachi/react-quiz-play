import { connect } from 'react-redux'

// DATA
import { actions as runtimeActions, getAllPage, getStartQuestion } from '../reducers/runtime'

// UI
import PagePlayComponent from '../components/PagePlay/index'

const mapStateToProps = (state) => {
  return {
    enableTimer: !!state.quiz.quizInfo.timerData,
    pagingData : {
      ...state.runtime,
      allPage      : getAllPage(state),
      startQuestion: getStartQuestion(state),
    },
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickPrev  : (event) => {
      event.preventDefault()
    },
    onClickNext  : (event) => {
      event.preventDefault()
      dispatch(runtimeActions.nextPage())
    },
    onClickSubmit: (event) => {
      event.preventDefault()
      dispatch(runtimeActions.submit())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PagePlayComponent)