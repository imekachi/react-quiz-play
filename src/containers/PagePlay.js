import React from 'react'
import { connect } from 'react-redux'

import PagePlayComponent from '../components/PagePlay/index'

@connect(store => {
  return {
    timerData: store.quiz.quizInfo.timerData,
    quizData : store.quiz.quizData,
  }
})
export default class PagePlay extends React.Component {
  render() {
    return (
      <PagePlayComponent {...{
        ...this.props.quizData,
        timerData: this.props.timerData,
      }}/>
    )
  }
}