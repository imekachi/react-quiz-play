import React from 'react'

// UI
import ImgZoomable from '../ImgZoomable'

const Title = ({number, titleAttr, titleHtml, questionImg, hideQuestionNumber}) => {
  number = hideQuestionNumber ? '?' : number
  return (
    <div className="question-title">
      <i className="number" title={`ข้อที่ ${number}`}>{number}</i>
      <span className="title" title={titleAttr}>{titleHtml}</span>
      <ImgZoomable className="question-img" src={questionImg} alt={titleAttr}/>
    </div>
  )
}
export default Title