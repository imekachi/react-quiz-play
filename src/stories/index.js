import React from 'react'
import { storiesOf, addDecorator } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'

import mockupData from './mockupData'
import MockupWrapper from './MockupWrapper'

// UI components
import InitPage from '../pages/InitPage'
import PlayPage from '../pages/PlayPage'
import Icon from '../components/Icon'
// import { makeButtonWithStates } from './ButtonWithStates'
import { makeButtonWithStates } from '../components/ButtonWithStates'

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

/**
 * Button With States
 */
makeStoriesOf('ButtonWithStates')
  .addDecorator((story) => (
      <div className="_margin-bottom-lg">
        {story()}
      </div>
    ),
  )
  .addDecorator(generateWrapper())
  .add('state: ready(renderWithConfig)', () => {
    const Button = makeButtonWithStates({
      stateConfig: {
        ready: {
          icon: 'fa-arrow-left',
          text: 'ปุ่มแบบปกติ',
        }
      }
    })
    return <Button/>
  })
  .add('state: ready(renderWithHtml)', () => {
    const Button = makeButtonWithStates({
      stateConfig: {
        ready: {
          title: 'ปุ่มแบบปกติ',
          html: (<span>ปุ่มแบบ <Icon className="fa-user"/> ปกติ</span>)
        }
      }
    })
    return <Button/>
  })
  .add('state: loading', () => {
    const Button = makeButtonWithStates()
    return <Button loading/>
  })

/**
 * Init Page
 */
makeStoriesOf('Init Page')
  .addDecorator(generateWrapper())
  .add('Login screen', () => (
    <InitPage {...getMockupData()}/>
  ))
  .add('Play screen', () => (
    <InitPage {...getMockupData({ isLogin: true })}/>
  ))

/**
 * Choice Box
 */
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

/**
 * Timer
 */
makeStoriesOf('Timer')
  .addDecorator(generateWrapper({ appState: 'play' }))
  .add('Timer - normal', () => (
    <PlayPage {...getMockupData()}/>
  ))
  .add('Timer - challenge', () => (
    <PlayPage {...getMockupData({ isChallengeMode: true })}/>
  ))

/**
 * Result Page
 */
// makeStoriesOf('Result Page')
//   .addDecorator(generateWrapper({ appState: 'play' }))
