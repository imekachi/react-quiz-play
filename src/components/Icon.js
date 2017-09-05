import React from 'react'

import { classNames } from '../util/string'

/**
 * FontAwesome Icon component
 */
const Icon = (props) => {
  const baseClass  = props.baseClass || 'fa'
  const TagName    = props.tagName || 'i'
  const ariaHidden = props['aria-hidden'] !== false

  const allowedProps = {
    className    : classNames(baseClass, props.className),
    title        : props.title,
    style        : props.style,
    'aria-hidden': ariaHidden,
  }

  return (
    <TagName {...allowedProps} >
      {props.children}
    </TagName>
  )
}

export default Icon