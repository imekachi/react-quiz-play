import React from 'react'

import { iF } from '../util/condition'
import { classNames } from '../util/string'
import Icon from './Icon'

const Description = (props) => (
  <div className={classNames('quiz-description', iF(props.centered, '_txt-center'))}>

    <span className="detail" dangerouslySetInnerHTML={{ __html: props.value }}/>

    {props.isReadmoreVisible && (
      <span className="readmore">
        ...อ่านเพิ่มเติม <Icon className="fa-chevron-down _icon-size"/>
      </span>
    )}
  </div>
)

export default Description