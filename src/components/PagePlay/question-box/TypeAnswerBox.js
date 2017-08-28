import React from 'react'
import InputField from '../../InputField'

const TypeAnswerBox = ({ choiceId, input, onCommitAnswer }) => {
  return (
    <div className="typeanswer-box form-row">
      <label htmlFor={choiceId} className="label">คำตอบของคุณ</label>
      <InputField id={choiceId} className="forminput -lg" placeholder="พิมพ์คำตอบที่นี่..." type="text"
                  autoComplete="off" onEnter={onCommitAnswer} {...input}/>
    </div>
  )
}

export default TypeAnswerBox