import React from 'react'

import { WHITE_SPACE } from '../constants/unicode'
import { iF } from '../util/condition'
import { isValueEmpty } from '../util/empty'
import { classNames } from '../util/string'
import Icon from './Icon'

const defaultConfig = {
  currentState: 'ready',
  tagName     : 'button',

  injectDekDButtonClass: true,

  defaultState: 'ready',
  stateConfig : {
    // Predefined states
    ready  : {
      icon       : null,
      iconOnRight: false,
      text       : 'button',
      html       : null, // this will override text
      title      : null, // this will override title, using with html
    },
    loading: {
      icon       : 'fa-spinner fa-spin',
      iconOnRight: false,
      text       : 'กำลังโหลด',
      title      : null,
      html       : null,
    },

    // Add your own states
  },
}

export function makeButtonWithStates(config = { ...defaultConfig }) {

  function getCurrentStateFromProp(props) {
    for (let prop of Object.keys(props)) {
      if (props.hasOwnProperty(prop) && prop in props.stateConfig && props[prop]) {
        return props.stateConfig[prop]
      }
    }

    return props.stateConfig[props.defaultState]
  }

  function injectBtnProps(props, currentStateConfig) {
    const { href, disabled, onClick } = props

    // return only allowed props
    return {
      className: classNames(
        iF(props.injectDekDButtonClass, 'dekdbutton'),
        (props.className || ''),
      ),
      title    : (props.title || currentStateConfig.title) || currentStateConfig.text,
      disabled,
      href,
      onClick,
    }
  }

  function renderFromConfig(props, currentStateConfig) {
    let buttonIcon     = null,
        buttonText     = null,
        iconOnRight    = currentStateConfig.iconOnRight,
        isTextNotEmpty = !isValueEmpty(currentStateConfig.text)

    if (!isValueEmpty(currentStateConfig.icon)) {
      buttonIcon = (
        <Icon className={currentStateConfig.icon}/>
      )
    }

    if (isTextNotEmpty) {
      buttonText = currentStateConfig.text
    }

    // tag name variable has to be capital, otherwise React will render it as <tagName>
    const TagName = props.tagName

    return (
      <TagName {...injectBtnProps(props, currentStateConfig)}>
        {!iconOnRight && buttonIcon}
        {isTextNotEmpty && !iconOnRight && WHITE_SPACE}
        {buttonText}
        {isTextNotEmpty && iconOnRight && WHITE_SPACE}
        {iconOnRight && buttonIcon}
      </TagName>
    )
  }

  function renderFromHtml(props, currentStateConfig) {
    // tag name variable has to be capital, otherwise React will render it as <tagName>
    const TagName = props.tagName
    return (
      <TagName {...injectBtnProps(props, currentStateConfig)}>
        {currentStateConfig.html}
      </TagName>
    )
  }

  return (props) => {
    props             = { ...defaultConfig, ...config, ...props }
    props.stateConfig = { ...defaultConfig.stateConfig, ...config.stateConfig, ...props.stateConfig }

    const currentStateConfig = getCurrentStateFromProp(props, props.stateConfig)
    const isHtmlMode         = !isValueEmpty(currentStateConfig.html)

    if (isHtmlMode) {
      return renderFromHtml(props, currentStateConfig)
    }

    return renderFromConfig(props, currentStateConfig)
  }
}

export default makeButtonWithStates()