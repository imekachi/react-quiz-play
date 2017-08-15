import React from 'react'
import { connect } from 'react-redux'
import { QUIZ_TYPE } from '../constants/quizConst'

import { actions as AuthActions } from '../reducers/auth'

import PageInitComponent from '../components/PageInit'

@connect(store => {
  return {
    quizInfo: store.quiz.quizInfo,
    auth    : {
      isLogin     : store.auth.isLogin,
      isLoading   : store.auth.isLoading,
      loggedInType: store.auth.loggedInType,
    },
  }
})
export default class InitPage extends React.Component {

  componentDidMount() {
    if (this.props.quizInfo.quizType !== QUIZ_TYPE.SOCIAL) {
      this.props.dispatch(AuthActions.loginFB())
    }
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
        auth: this.props.auth,
      }}/>
    )
  }
}