import React from 'react'
import { connect } from 'react-redux'

import { selectStartQuesiton } from '../reducers/runtime'

import QuestionStreamComponent from '../components/PagePlay/QuestionStream'

@connect(state => {
  return {
    questionList   : state.quiz.quizData.questionList,
    questionPerPage: state.quiz.quizData.questionPerPage,
    startQuestion  : selectStartQuesiton(state),
  }
})
export default class QuestionStream extends React.Component {
  getCurrentStream() {
    const isQuestionIncluded = (questionObj, index) => {
      const questionNumber = index + 1
      return (questionNumber >= this.props.startQuestion) && (questionNumber < this.props.startQuestion + this.props.questionPerPage)
    }

    return this.props.questionList.filter(isQuestionIncluded)
  }

  render() {
    return (
      <QuestionStreamComponent stream={this.getCurrentStream()}/>
    )
  }
}