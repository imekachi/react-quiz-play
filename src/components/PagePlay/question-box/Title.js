import React from 'react'

// UI
import ImgZoomable from '../ImgZoomable'

const Title = (props) => {
  return (
    <div className="question-title">
      <i className="number" title={`ข้อที่ ${props.number}`}>{props.number}</i>
      <span className="title" title={props.titleAttr}>{props.titleHtml}</span>
      <ImgZoomable className="question-img" src={props.questionImg} alt={props.titleAttr}/>
    </div>
  )
}
export default Title