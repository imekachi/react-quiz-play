import React from 'react'
import styled from 'styled-components'

import { iF } from '../../util/condition'
import { classNames } from '../../util/string'
import ChoiceBox from './question-box/ChoiceBox'
import Title from './question-box/Title'

const Wrapper = styled.div`
  position: relative;
  text-align: left;
  border: 1px solid #E5E5E5;
  margin: ${props => props.isSingleQuestion ? 0 : '30px'} auto;
  border-radius: ${props => props.isSingleQuestion ? '0 0 3px 3px' : '3px'};
  ${props => props.isSingleQuestion && 'border-top: 0 none;'}
`

const QuestionBox = (field) => {
  const { input, meta, payload } = field

  // Validation
  const hasError = meta.error && meta.touched

  // Data to render
  const { questionData, choiceData, isMobile, hideQuestionNumber, isSingleQuestion } = payload
  return (
    <Wrapper className={classNames('question-box', iF(hasError, '-error-noanswer'))}
             isSingleQuestion={isSingleQuestion}>
      <Title {...questionData} hideQuestionNumber={hideQuestionNumber}/>
      {/* AnswerMsg : <i class="fa fa-clock-o"></i> คุณไม่ได้ตอบคำถามในเวลาที่กำหนด */}
      <ChoiceBox {...choiceData} questionNumber={questionData.number} isMobile={isMobile} fieldData={{ input, meta }}/>
      {/* AnswerDetail */}
    </Wrapper>
  )
}

export default QuestionBox