import React from 'react'

// UI
import Title from './question-box/Title'
import ChoiceBox from './question-box/ChoiceBox'

export default class QuestionBox extends React.Component {
  render() {
    return (
      <div className="question-box">
        <Title/>
        {/* AnswerMsg : <i class="fa fa-clock-o"></i> คุณไม่ได้ตอบคำถามในเวลาที่กำหนด */}
        <ChoiceBox/>
        {/* AnswerDetail */}
      </div>
    )
  }
}