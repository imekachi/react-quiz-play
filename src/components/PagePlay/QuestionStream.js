import React from 'react'
import { Field } from 'redux-form'
// UI
import QuestionBox from './QuestionBox'

const QuestionStreamComponent = ({ stream, isSingleQuestion, isMobile, hideQuestionNumber, getFieldName }) => {

  const listOfQuestions = stream.map((questionObj, index) => {

    return <Field key={index}
                  name={getFieldName(questionObj.questionData.number)}
                  component={QuestionBox}
                  payload={{
                    ...questionObj,
                    isMobile,
                    hideQuestionNumber,
                    isSingleQuestion,
                  }}/>
  })

  return (
    <div className="question-stream">
      {listOfQuestions}
    </div>
  )
}

export default QuestionStreamComponent