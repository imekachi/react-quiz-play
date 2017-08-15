import React from 'react'

// Data
import { getMockupData } from './mockupData'
import { generateWrapper } from './MockupWrapper'

// Util
import { makeStoriesOf } from './util'

// UI Components
import PlayPage from '../components/PagePlay/index'


/**
 * Choice Box
 */
makeStoriesOf('ChoiceBox')
  .addDecorator(generateWrapper({ appState: 'play' }))
  .add('layout: list', () => (
    <PlayPage {...getMockupData({
      timerData: {
        isTimeLimited: false,
      },
    })}/>
  ))
  .add('layout: grid', () => (
    <PlayPage {...getMockupData({
      timerData  : {
        isTimeLimited: false,
      },
      uiPageStore: {
        currentPage: 2,
      },
    })}/>
  ))