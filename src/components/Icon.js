import React from 'react'
import { combineClassNames } from '../util/string'

/**
 * FontAwesome Icon component
 */
const Icon = (props) => {
  let TagName    = props.tagName || 'i'
  let classNames = props.className || ''
  let ariaHidden = props['aria-hidden'] !== false

  return (
    <TagName {...props} className={combineClassNames('fa', classNames)} aria-hidden={ariaHidden}>
      {props.children}
    </TagName>
  )
}

export default Icon