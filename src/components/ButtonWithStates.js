import React from 'react'

import { isValueEmpty } from '../util/empty'
import { WHITE_SPACE } from '../util/unicode'

const defaultConfig = {
  currentState: 'ready',
  tagName     : 'button',

  stateConfig: {
    ready  : {
      icon       : null,
      iconOnRight: false,
      text       : '',
    },
    loading: {
      icon       : 'fa-spinner fa-spin',
      iconOnRight: false,
      text       : 'กำลังโหลด',
    },
  },
}

export function makeButtonWithState(config = { ...defaultConfig }) {
  return (props) => {
    let { currentState, tagName, stateConfig } = { ...defaultConfig, ...config }

    // get currentState
    for (let prop of Object.keys(props)) {
      if (props.hasOwnProperty(prop) && prop in stateConfig) {
        currentState = prop
        break
      }
    }

    // Prepare button content
    let buttonIcon     = null,
        buttonText     = null,
        iconOnRight    = stateConfig[currentState].iconOnRight,
        isTextNotEmpty = !isValueEmpty(stateConfig[currentState].text)

    if (!isValueEmpty(stateConfig[currentState].icon)) {
      buttonIcon = (
        <i className={`buttonicon fa ${stateConfig[currentState].icon}`} aria-hidden={true}/>
      )
    }

    if (isTextNotEmpty)
      buttonText = (<span className="label">{stateConfig[currentState].text}</span>)

    // tag name variable has to be capital, otherwise React will render it as <tagName>
    let TagName = tagName

    return (
      <TagName className={`dekdbutton ${props.className || ''}`} href={props.href} title={props.title}>
        {!iconOnRight && buttonIcon}
        {isTextNotEmpty && !iconOnRight && WHITE_SPACE}
        {buttonText}
        {isTextNotEmpty && iconOnRight && WHITE_SPACE}
        {iconOnRight && buttonIcon}
      </TagName>
    )
  }
}

export default makeButtonWithState()