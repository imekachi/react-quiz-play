import React from 'react'

import { iF } from '../util/condition'
import { classNames } from '../util/string'

const MessageBox = (props) => (
  <div className={classNames('message-box', props.className, iF(props.type, `-${props.type}`))}
       title={props.title || props.value}
  >
    {props.children || props.value}
  </div>
)

export default MessageBox