import { connect } from 'react-redux'

// DATA
import { actions as runtimeActions, getAllPage, getStartQuestion } from '../reducers/runtime'
import FormPlay from './FormPlay'

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
      dispatch(runtimeActions.prevPage())
    },
    onClickNext  : (event) => {
      event.preventDefault()
      dispatch(runtimeActions.nextPage())
    },
    onClickSubmit: (event) => {
      event.preventDefault()
      dispatch(runtimeActions.submit())
    },
    onFormSubmit : (event) => {
      event.preventDefault()
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormPlay)