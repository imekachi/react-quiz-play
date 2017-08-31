import React from 'react'
import { connect } from 'react-redux'

import { actions as resultActions } from '../reducers/result'
import PageResultComponent from '../components/PageResult'

const mapStateToProps = (state) => {
  return {
    resultData     : state.result.data,
    isResultShared : state.result.isResultShared,
    isChallengeMode: state.quiz.quizInfo.isChallengeMode,
    isMobile       : state.quiz.clientData.isMobile,
    quizType       : state.quiz.quizInfo.quizType,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchResult: () => dispatch(resultActions.fetchResult()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageResultComponent)