import React from 'react'
import { combineClassNames } from '../../util/string'
// UI
import Title from './question-box/Title'
import ChoiceBox from './question-box/ChoiceBox'
import { iF } from '../../util/condition'

const QuestionBox = (field) => {
  const { input, meta, payload } = field

  // Validation
  const hasError = meta.error && meta.touched

  // Data to render
  const { questionData, choiceData, isMobile, hideQuestionNumber } = payload
  return (
    <div className={combineClassNames('question-box', iF(hasError, '-error-noanswer'))}>
      <Title {...questionData} hideQuestionNumber={hideQuestionNumber}/>
      {/* AnswerMsg : <i class="fa fa-clock-o"></i> คุณไม่ได้ตอบคำถามในเวลาที่กำหนด */}
      <ChoiceBox {...choiceData} questionNumber={questionData.number} isMobile={isMobile} fieldData={{ input, meta }}/>
      {/* AnswerDetail */}
    </div>
  )
}

export default QuestionBox