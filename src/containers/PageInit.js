import React from 'react'
import { connect } from 'react-redux'

import { actions as QuizActions } from '../reducers/quiz'
import { selectIsLogin, selectIsFBLoading, selectLoggedInType } from '../reducers/auth'

import PageInitComponent from '../components/PageInit'

@connect(state => {
  return {
    quizInfo: state.quiz.quizInfo,
    auth    : {
      isLogin      : selectIsLogin(state),
      isFBLoading  : selectIsFBLoading(state),
      loggedInType : selectLoggedInType(state),
    },
  }
})
export default class InitPage extends React.Component {
  constructor() {
    super()
    this.playClickHandler = this.playClickHandler.bind(this)
  }

  playClickHandler() {
    this.props.dispatch(QuizActions.start())
  }

  render() {
    const { quizCover, timerData, isNotFound, isAccessible, description } = this.props.quizInfo

    return (
      <PageInitComponent {...{
        quizCover,
        timerData,
        isNotFound,
        isAccessible,
        description,
        auth            : this.props.auth,
        playClickHandler: this.playClickHandler,
      }}/>
    )
  }
}