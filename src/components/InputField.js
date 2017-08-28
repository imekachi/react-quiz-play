import React from 'react'

export const isEnterKey = (event) => {
  return event.key === 'Enter'
}

const InputField = (props) => {
  const { component, onEnter = () => (undefined), ...passingTroughProps } = props

  const Component = component || 'input'

  const onKeypress = (event) => {
    if (isEnterKey(event)) {
      event.preventDefault()
      onEnter(event)
    }
  }

  return (
    <Component onKeyPress={onKeypress} {...passingTroughProps}/>
  )
}

export default InputField