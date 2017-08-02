import React from 'react'
// import { storiesOf, action, linkTo } from '@storybook/react'
import { storiesOf, addDecorator } from '@storybook/react'
import { withKnobs, text, object, select } from '@storybook/addon-knobs'

import mockupData from './mockupData'
import MockupWrapper from './MockupWrapper'

// UI components
import InitPage from '../pages/InitPage'
import PlayPage from '../pages/PlayPage'
import { makeButtonWithState } from '../components/ButtonWithStates'

// Util
const makeStoriesOf   = (storyname) => storiesOf(storyname, module)
const getMockupData   = (override = {}) => ({ ...mockupData, ...override })
const generateWrapper = (config) => {
  config = {
    appState      : 'init',
    singleQuestion: true,
    ...config
  }
  return (story) => <MockupWrapper {...config}>{story()}</MockupWrapper>
}

// Global Wrapper
addDecorator(withKnobs)

makeStoriesOf('ButtonWithStates')
  .addDecorator((story)=>(
      <div className="_margin-bottom-lg">
        {story()}
      </div>
    )
  )
  .addDecorator(generateWrapper())
  .add('state: ready', () => {
    const tagName      = text('tagName', 'button')
    const stateConfig  = object('states', {
      ready  : {
        icon       : null,
        iconOnRight: false,
        text       : 'ปุ่มแบบปกติ',
      },
      loading: {
        icon       : 'fa-spinner fa-spin',
        iconOnRight: false,
        text       : 'กำลังโหลด',
      },
    })
    const currentState = select('currentState', {
      ready  : 'ready',
      loading: 'loading',
    }, 'ready')

    const config = {
      currentState,
      tagName,
      stateConfig,
    }
    const Button = makeButtonWithState(config)
    return <Button {...{ currentState, tagName, stateConfig, }}/>
  })
  .add('state: loading', () => {
    const Button = makeButtonWithState()
    return <Button loading/>
  })
  .add('with icon: onRight', () => {
    const tagName      = text('tagName', 'button')
    const stateConfig  = object('states', {
      ready  : {
        icon       : 'fa-arrow-right',
        iconOnRight: true,
        text       : 'ไอคอนทางขวา',
      },
    })
    const currentState = 'ready'

    const config = {
      currentState,
      tagName,
      stateConfig,
    }
    const Button = makeButtonWithState(config)
    return <Button {...{ currentState, tagName, stateConfig, }}/>
  })


makeStoriesOf('Init Page')
  .addDecorator(generateWrapper())
  .add('Login screen', () => (
    <InitPage {...getMockupData()}/>
  ))
  .add('Play screen', () => (
    <InitPage {...getMockupData({ isLogin: true })}/>
  ))

makeStoriesOf('ChoiceBox')
  .addDecorator(generateWrapper({ appState: 'play' }))
  .add('choiceLayout: list', () => (
    <PlayPage {...getMockupData({
      timerData: {
        isTimeLimited: false,
      },
    })}/>
  ))
  .add('choiceLayout: grid', () => (
    <PlayPage {...getMockupData({
      timerData  : {
        isTimeLimited: false,
      },
      uiPageStore: {
        currentPage: 2,
      },
    })}/>
  ))
makeStoriesOf('Timer')
  .addDecorator(generateWrapper({ appState: 'play' }))
  .add('Timer - normal', () => (
    <PlayPage {...getMockupData()}/>
  ))