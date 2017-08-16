import React from 'react'
import { connect } from 'react-redux'

import { actions as QuizActions } from '../reducers/quiz'

import PageInitComponent from '../components/PageInit'
import { AUTH_FACEBOOK } from '../constants/authConst'

@connect(store => {
  return {
    quizInfo: store.quiz.quizInfo,
    auth    : {
      isLogin      : store.auth.isLogin,
      isFBLoading  : store.auth.isLoading && store.auth.loggingInType.has(AUTH_FACEBOOK),
      loggedInType : store.auth.loggedInType,
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