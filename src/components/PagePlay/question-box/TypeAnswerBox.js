import React from 'react'

const TypeAnswerBox = ({ choiceId, inputData }) => (
  <div className="typeanswer-box form-row">
    <label htmlFor={choiceId} className="label">คำตอบของคุณ</label>
    <input id={choiceId} className="forminput -lg" placeholder="พิมพ์คำตอบที่นี่..." type="text" autoComplete="off" {...inputData}/>
  </div>
)

export default TypeAnswerBox