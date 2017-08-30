import { connect } from 'react-redux'
// DATA
import { actions as runtimeActions, getAllPage, getStartQuestion, getIsNextButtonDisabled } from '../reducers/runtime'
import { actions as quizActions, getQuestionCount, getIsSingleQuestion } from '../reducers/quiz'
import FormPlay from './FormPlay'

const mapStateToProps = (state) => {
  return {
    enableTimer     : !!state.quiz.quizInfo.timerData,
    questionCount   : getQuestionCount(state),
    disableNext     : getIsNextButtonDisabled(state),
    isSingleQuestion: getIsSingleQuestion(state),
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
      return dispatch(quizActions.submit(data))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormPlay)