import React from 'react'
import { isValueEmpty } from '../../../util/empty'
import { iF } from '../../../util/condition'

// UI
import ImgZoomable from '../ImgZoomable'

const ChoiceItem = (props) => {
  if (props.renderAsFiller)
    return <div className="choice-item -grid-filler"/>

  return (
    <div className="choice-item" title={props.titleAttr}>

      <ImgZoomable renderAsBg className="img-box" src={props.img}/>

      <div className={iF(!isValueEmpty(props.img), 'txt-box')}>
        <input id={props.choiceId} className="formradio" type="radio"
               name={`answer[${props.questionNumber}]`}
               value={props.value}
        />
        <label htmlFor={props.choiceId} className="radiolabel">{props.titleHtml}</label>
      </div>
    </div>
  )
}

export default ChoiceItem