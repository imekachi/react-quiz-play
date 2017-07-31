import React from 'react'

// UI
import ImgZoomable from '../ImgZoomable'

const mockupData = {
  index      : '1',
  titleAttr  : 'เปาบุ้นจิ้นชอบกินไข่เต่า ส่วนจั่นเจาชอบกินลูกอมอะไร?',
  titleHtml  : 'เปาบุ้นจิ้นชอบกินไข่เต่า ส่วนจั่นเจาชอบกินลูกอมอะไร?',
  questionImg: 'https://www0.dek-d.com/assets/quiz/images/default-quiz-cover.png',
}

const Title = (props) => {
  props = { ...props, ...mockupData }

  return (
    <div className="question-title">
      <i className="number" title={`ข้อที่ ${props.index}`}>{props.index}</i>
      <span className="title" title={props.titleAttr}>{props.titleHtml}</span>
      <ImgZoomable className="question-img" src={props.questionImg} alt={props.titleAttr}/>
    </div>
  )
}
export default Title