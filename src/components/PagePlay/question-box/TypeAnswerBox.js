import React from 'react'

const TypeAnswerBox = ({ inputName, choiceId }) => (
  <div className="typeanswer-box form-row">
    <label htmlFor={choiceId} className="label">คำตอบของคุณ</label>
    <input id={choiceId} className="forminput -lg" name={inputName} placeholder="พิมพ์คำตอบที่นี่..." type="text" autoComplete="off"/>
  </div>
)

export default TypeAnswerBox