import React from 'react'
import { isValueEmpty } from '../../../util/empty'
import { combineClassNames } from '../../../util/string'
import { iF } from '../../../util/condition'

// UI
import ImgZoomable from '../ImgZoomable'

const ChoiceItemComponent = ({ titleAttr, titleHtml, img, value, inputName, choiceId, isActive, renderAsFiller, onChoiceClick }) => {
  if (renderAsFiller)
    return <div className="choice-item -grid-filler"/>

  return (
    <div className={combineClassNames('choice-item', iF(isActive, '-active'))}
         title={titleAttr} onClick={onChoiceClick} data-choice-id={choiceId}>

      <ImgZoomable renderAsBg className="img-box" src={img}/>

      <div className={iF(!isValueEmpty(img), 'txt-box')}>
        <input id={choiceId} className="formradio" type="radio"
               name={inputName}
               value={value}
               checked={isActive}/>
        <label htmlFor={choiceId} className="radiolabel" dangerouslySetInnerHTML={{ __html: titleHtml }}/>
      </div>
    </div>
  )
}

export default ChoiceItemComponent