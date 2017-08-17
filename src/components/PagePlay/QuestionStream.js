import React from 'react'

// UI
import QuestionBox from './QuestionBox'

const QuestionStream = ({ stream }) => {

  const listOfQuestions = stream.map((questionObj, index) => {
    return <QuestionBox key={index} questionData={questionObj.questionData} choiceData={questionObj.choiceData}/>
  })

  return (
    <div className="question-stream">
      {listOfQuestions}
    </div>
  )
}

export default QuestionStream