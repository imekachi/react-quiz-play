import { connect } from 'react-redux'

import { getAllPage, getIsSingleQuestion, getQuestionCount } from '../reducers/quiz'
import { actions as runtimeActions, getIsNextButtonDisabled, getStartQuestion } from '../reducers/runtime'
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
    onClickPrev: (event) => {
      event.preventDefault()
      dispatch(runtimeActions.prevPage())
    },
    onClickNext: (event) => {
      event.preventDefault()
      dispatch(runtimeActions.nextPage())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormPlay)