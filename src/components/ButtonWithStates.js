import React from 'react'

const defaultConfig = {
  state  : 'ready',
  tagName: 'button',

  stateConfig: {
    ready: {
      icon: null,
      text: 'button',
    },
  },
}

export default class ButtonWithStates extends React.Component {
  render() {
    const TagName    = this.props.tagName || defaultConfig.tagName
    let currentState = defaultConfig.state
    let stateConfig  = { ...defaultConfig.stateConfig, ...this.props.stateConfig }

    // define currentState if passed with props
    for (let prop of Object.keys(this.props)) {
      if (this.props.hasOwnProperty(prop) && prop in stateConfig) {
        currentState = prop
        break
      }
    }

    return (
      <TagName className={`dekdbutton ${this.props.className}`} href={this.props.href} title={this.props.title}>
        {/* if icon is null, do not show*/}
        {stateConfig[currentState].icon &&
        (<i className={`buttonicon fa ${stateConfig[currentState].icon}`} aria-hidden={true}/> )}
        <span className="label">{stateConfig[currentState].text}</span>
      </TagName>
    )
  }
}