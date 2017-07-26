import React from 'react'

import { isValueEmpty } from '../util/empty'
import { WHITE_SPACE } from '../util/unicode'

const defaultConfig = {
  currentState: 'ready',
  tagName     : 'button',

  stateConfig: {
    ready: {
      icon: null,
      text: '',
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
    let buttonIcon  = null,
        buttonText  = null,
        isTextNotEmpty = !isValueEmpty(stateConfig[currentState].text)

    if (!isValueEmpty(stateConfig[currentState].icon)) {
      buttonIcon = (
        <i className={`buttonicon fa ${stateConfig[currentState].icon}`} aria-hidden={true}>
          {isTextNotEmpty ? WHITE_SPACE : null}
        </i>
      )
    }

    if (isTextNotEmpty)
      buttonText = (<span className="label">{stateConfig[currentState].text}</span>)

    // tag name variable has to be capital, otherwise React will render it as <tagName>
    let TagName = tagName

    return (
      <TagName className={`dekdbutton ${props.className}`} href={props.href} title={props.title}>
        {buttonIcon}{buttonText}
      </TagName>
    )
  }
}

export default makeButtonWithState()