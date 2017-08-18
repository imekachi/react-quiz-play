import React from 'react'
import { connect } from 'react-redux'

import QuesitonStreamComponent from '../components/PagePlay/QuestionStream'

@connect(state => {
  return {
    questionList: state.quiz.quizData.questionList,
    pagingData  : state.runtime,
  }
})
export default class QuestionStream extends React.Component {
  getCurrentStream() {
    const isQuestionIncluded = (questionObj, index) => {
      const questionNumber                     = index + 1
      const { startQuestion, questionPerPage } = this.props.pagingData

      return (questionNumber >= startQuestion) && (questionNumber < startQuestion + questionPerPage)
    }

    return this.props.questionList.filter(isQuestionIncluded)
  }

  render() {
    return (
      <QuesitonStreamComponent stream={this.getCurrentStream()}/>
    )
  }
}