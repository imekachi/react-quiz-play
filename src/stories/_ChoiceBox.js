import React from 'react'

// Data
import { getMockupData } from './mockupData'
import { generateWrapper } from './MockupWrapper'

// Util
import { makeStoriesOf } from './util'

// UI Components
import PlayPage from '../pages/PlayPage'


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