import { connect } from 'react-redux'

// DATA
import { actions as runtimeActions, getAllPage, getStartQuestion } from '../reducers/runtime'
import { getQuestionCount } from '../reducers/quiz'
import FormPlay from './FormPlay'

const mapStateToProps = (state, ownProps) => {
  return {
    enableTimer: !!state.quiz.quizInfo.timerData,
    questionCount: getQuestionCount(state),
    disableNext: ownProps.pristine || ownProps.submitting,
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
      dispatch(runtimeActions.submit())
    },
    onFormSubmit : (data) => {
      window.alert(`You submitted:\n\n${JSON.stringify(data, null, 2)}`)
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormPlay)