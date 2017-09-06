import React from 'react'
import { Element as ScrollElement } from 'react-scroll'
import { Field } from 'redux-form'

import QuestionBox from './QuestionBox'

const QuestionStreamComponent = ({ stream, isSingleQuestion, isMobile, hideQuestionNumber, getFieldName }) => {

  const listOfQuestions = stream.map((questionObj, index) => {
    const questionName = getFieldName(questionObj.questionData.number)
    return (
      <ScrollElement name={questionName} key={index}>
        <Field name={questionName}
               component={QuestionBox}
               payload={{
                 ...questionObj,
                 isMobile,
                 hideQuestionNumber,
                 isSingleQuestion,
               }}/>
      </ScrollElement>
    )
  })

  return (
    <div className="question-stream">
      {listOfQuestions}
    </div>
  )
}

export default QuestionStreamComponent