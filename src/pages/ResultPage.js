import React from 'react'

import ResultImage from '../components/page-result/ResultImage'
import ActionBox from '../components/page-result/ActionBox'
import ShareBox from '../components/page-result/ShareBox'
import VoteBox from '../components/VoteBox'
import { isObjEmpty } from '../util/empty'

const OwnerLink = (props) => (
  <a className="ownerlink" href={props.url} title={props.textAttr}>
    {props.textHtml}
  </a>
)

const ResultPage = (props) => {
  let isDescriptionCentered = true
  let isResultShared        = false

  return (
    <div className="result-body ended-state">
      <div className="result-box">
        <div className="result-container">
          <div className="label">{props.labelHeader || 'ผลลัพธ์ที่คุณได้'}</div>

          <ResultImage src={props.image}/>

          <span className="result _double-quote">{props.header}</span>
          <div className={`result-description ${ isDescriptionCentered ? '_txt-center' : ''}`}>
            <span className="detail">{props.description}</span>
            {!isObjEmpty(props.descriptionLink) && <OwnerLink {...props.descriptionLink}/>}
          </div>

          {!isResultShared && <div className="no-autoshare-msg">*ผลลัพธ์ยังไม่ถูกแชร์ไปที่ Facebook</div>}
        </div>

        <ActionBox quizType={props.quizType}/>
      </div>

      <ShareBox isChallengeMode={props.isChallengeMode} isMobile={props.isMobile}/>
      <VoteBox/>
    </div>
  )
}

export default ResultPage