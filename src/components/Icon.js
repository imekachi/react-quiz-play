import React from 'react'
import { combineClassNames } from '../util/string'

/**
 * FontAwesome Icon component
 */
const Icon = (props) => {
  const baseClass  = props.baseClass || 'fa'
  const TagName    = props.tagName || 'i'
  const classNames = props.className || ''
  const ariaHidden = props['aria-hidden'] !== false

  const allowedProps = {
    className    : combineClassNames(baseClass, classNames),
    title        : props.title,
    'aria-hidden': ariaHidden,
  }

  return (
    <TagName {...allowedProps} >
      {props.children}
    </TagName>
  )
}

export default Icon