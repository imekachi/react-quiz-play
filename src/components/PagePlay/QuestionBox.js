import React from 'react'

// UI
import Title from './question-box/Title'
import ChoiceBox from './question-box/ChoiceBox'

const QuestionBox = ({questionData, choiceData, isMobile, hideQuestionNumber}) => {
  return (
    <div className="question-box">
      <Title {...questionData} hideQuestionNumber={hideQuestionNumber}/>
      {/* AnswerMsg : <i class="fa fa-clock-o"></i> คุณไม่ได้ตอบคำถามในเวลาที่กำหนด */}
      <ChoiceBox {...choiceData} questionNumber={questionData.number} isMobile={isMobile}/>
      {/* AnswerDetail */}
    </div>
  )
}

export default QuestionBox