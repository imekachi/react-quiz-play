import React from 'react'

// UI
import Title from './question-box/Title'

export default class QuestionBox extends React.Component {
  render() {
    return (
      <div className="question-box">
        <Title/>
        {/* show-answer-msg: <i class="fa fa-clock-o"></i> คุณไม่ได้ตอบคำถามในเวลาที่กำหนด */}

      </div>
    )
  }
}