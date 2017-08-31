import React from 'react'
import { isValueEmpty } from '../../util/empty'
import { combineClassNames } from '../../util/string'
import { iF } from '../../util/condition'

import ResultImage from './ResultImage'
import ActionBox from './ActionBox'


const ResultBox = (props) => {
  const {
          image,
          header,
          labelHeader     = 'ผลลัพธ์ที่คุณได้',
          description     = {},
          descriptionLink = {},
          isResultShared,
          quizType,
        } = props

  return (
    <div className="result-box">
      <div className="result-container">
        <div className="label">{labelHeader}</div>

        <ResultImage src={image}/>

        <span className="result _double-quote">{header}</span>
        <div className={combineClassNames('result-description', iF(description.isCentered, '_txt-center'))}>
          <span className="detail">{description.textHtml}</span>
          {!isValueEmpty(descriptionLink) && (
            <a className="ownerlink" href={descriptionLink.url} title={descriptionLink.textAttr}>
              {descriptionLink.textHtml}
            </a>
          )}
        </div>

        {!isResultShared && (
          <div className="no-autoshare-msg">*ผลลัพธ์ยังไม่ถูกแชร์ไปที่ Facebook</div>
        )}
      </div>

      <ActionBox quizType={quizType}/>
    </div>
  )
}

export default ResultBox