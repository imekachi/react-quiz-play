import React from 'react'

// UI
import QuestionBox from './QuestionBox'

export default class QuestionStream extends React.Component {

  getQuestions(startQuestion = 1, length = this.props.questionData.questionPerPage) {
    const { questionList } = this.props.questionData

    const filterQuestionFn = (index) => {
      const questionNumber = index + 1
      return (questionNumber >= startQuestion) && (questionNumber < startQuestion + length)
    }

    return questionList.reduce((result, question, index) => {

      if (filterQuestionFn(index, question)) {
        result.push(
          <QuestionBox key={index} questionData={questionList[index]} choiceData={this.props.choiceData[index]}/>,
        )
      }

      return result
    }, [])
  }

  render() {
    const { questionData, currentPage } = this.props
    const startQuestion                 = ( questionData.questionPerPage * ( currentPage - 1) ) + 1

    return (
      <div className="question-stream">
        <div className="question-page">
          {this.getQuestions(startQuestion)}
        </div>
      </div>
    )
  }
}