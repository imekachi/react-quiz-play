import { connect } from 'react-redux'
// DATA
import { actions as runtimeActions, getAllPage, getStartQuestion, isNextButtonDisabled } from '../reducers/runtime'
import { getQuestionCount, isSingleQuestion } from '../reducers/quiz'
import FormPlay from './FormPlay'

const mapStateToProps = (state) => {
  return {
    enableTimer     : !!state.quiz.quizInfo.timerData,
    questionCount   : getQuestionCount(state),
    disableNext     : isNextButtonDisabled(state),
    isSingleQuestion: isSingleQuestion(state),
    pagingData      : {
      currentPage  : state.runtime.currentPage,
      canGoBack    : state.runtime.canGoBack,
      allPage      : getAllPage(state),
      startQuestion: getStartQuestion(state),
    },
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickPrev : (event) => {
      event.preventDefault()
      dispatch(runtimeActions.prevPage())
    },
    onClickNext : (event) => {
      event.preventDefault()
      dispatch(runtimeActions.nextPage())
    },
    onFormSubmit: (data) => {
      window.alert(`You submitted:\n\n${JSON.stringify(data, null, 2)}`)
      dispatch(runtimeActions.submit())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormPlay)