import React from 'react'

// UI
import Title from './question-box/Title'
import ChoiceBox from './question-box/ChoiceBox'

const QuestionBox = (props) => {
  return (
    <div className="question-box">
      <Title {...props.questionData}/>
      {/* AnswerMsg : <i class="fa fa-clock-o"></i> คุณไม่ได้ตอบคำถามในเวลาที่กำหนด */}
      <ChoiceBox {...props.choiceData} questionNumber={props.questionData.number}/>
      {/* AnswerDetail */}
    </div>
  )
}

export default QuestionBox