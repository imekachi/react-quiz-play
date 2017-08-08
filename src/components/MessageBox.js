import React from 'react'
import { combineClassNames } from '../util/string'
import { iF } from '../util/condition'

const MessageBox = (props) => (
  <div className={combineClassNames('message-box', iF(props.type, `-${props.type}`),)}
       title={props.title || props.value}
  >
    {props.children || props.value}
  </div>
)

export default MessageBox