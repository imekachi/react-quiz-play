import React from 'react'

// UI
import QuestionBox from './QuestionBox'

const QuestionStreamComponent = ({ stream, isMobile, hideQuestionNumber }) => {

  const listOfQuestions = stream.map((questionObj, index) => {
    return <QuestionBox key={index}
                        questionData={questionObj.questionData}
                        choiceData={questionObj.choiceData}
                        isMobile={isMobile}
                        hideQuestionNumber={hideQuestionNumber}/>
  })

  return (
    <div className="question-stream">
      {listOfQuestions}
    </div>
  )
}

export default QuestionStreamComponent