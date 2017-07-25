import React from 'react'

const defaultConfig = {
  currentState: 'ready',
  tagName     : 'button',

  stateConfig: {
    ready: {
      icon: null,
      text: 'button',
    },
  },
}

export function makeButtonWithState(config = { ...defaultConfig }) {
  return (props) => {
    let { currentState, tagName, stateConfig } = { ...defaultConfig, ...config }

    let TagName = tagName

    // define currentState if passed with props
    for (let prop of Object.keys(props)) {
      if (props.hasOwnProperty(prop) && prop in stateConfig) {
        currentState = prop
        break
      }
    }

    // TODO: fix space issue between icon and text
    return (
      <TagName className={`dekdbutton ${props.className}`} href={props.href} title={props.title}>
        {/* if icon is null, do not show*/}
        {stateConfig[currentState].icon &&
        (<i className={`buttonicon fa ${stateConfig[currentState].icon}`} aria-hidden={true}/> )}
        <span className="label">{stateConfig[currentState].text}</span>
      </TagName>
    )
  }
}

export default makeButtonWithState()