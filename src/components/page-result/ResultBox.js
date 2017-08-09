import React from 'react'

import ResultImage from './ResultImage'
import ActionBox from './ActionBox'
import { isValueEmpty } from '../../util/empty'

const OwnerLink = (props) => (
  <a className="ownerlink" href={props.url} title={props.textAttr}>
    {props.textHtml}
  </a>
)

const ResultBox = (props) => {
  return (
    <div className="result-box">
      <div className="result-container">
        <div className="label">{props.labelHeader || 'ผลลัพธ์ที่คุณได้'}</div>

        <ResultImage src={props.image}/>

        <span className="result _double-quote">{props.header}</span>
        <div className={`result-description ${ props.isDescriptionCentered ? '_txt-center' : ''}`}>
          <span className="detail">{props.description}</span>
          {!isValueEmpty(props.descriptionLink) && <OwnerLink {...props.descriptionLink}/>}
        </div>

        {!props.isResultShared && <div className="no-autoshare-msg">*ผลลัพธ์ยังไม่ถูกแชร์ไปที่ Facebook</div>}
      </div>

      <ActionBox quizType={props.quizType}/>
    </div>
  )
}

export default ResultBox