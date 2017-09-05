import React from 'react'

import { iF } from '../../../util/condition'
import { isValueEmpty } from '../../../util/empty'
import { classNames } from '../../../util/string'
import ImgZoomable from '../ImgZoomable'

const ChoiceItemComponent = (props) => {
  const { titleAttr, titleHtml, img, value, input, choiceId, isActive, renderAsFiller, onCommitAnswer } = props

  if (renderAsFiller) {
    return <div className="choice-item -grid-filler"/>
  }

  return (
    <div className={classNames('choice-item', iF(isActive, '-active'))}
         title={titleAttr} onClick={onCommitAnswer} data-choice-id={choiceId}>

      <ImgZoomable renderAsBg className="img-box" src={img}/>

      <div className={iF(!isValueEmpty(img), 'txt-box')}>
        <input id={choiceId} className="formradio" type="radio"
               {...input}
               checked={isActive}
               value={value}/>
        <label htmlFor={choiceId} className="radiolabel" dangerouslySetInnerHTML={{ __html: titleHtml }}/>
      </div>
    </div>
  )
}

export default ChoiceItemComponent
