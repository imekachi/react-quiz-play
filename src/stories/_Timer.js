import React from 'react'

// Data
import { getMockupData } from './mockupData'
import { generateWrapper } from './MockupWrapper'

// Util
import { makeStoriesOf } from './util'

// UI Components
import PlayPage from '../components/PagePlay/index'

/**
 * Timer
 */
makeStoriesOf('Timer')
  .addDecorator(generateWrapper({ appState: 'play' }))
  .add('normal', () => (
    <PlayPage {...getMockupData()}/>
  ))
  .add('challenge', () => (
    <PlayPage {...getMockupData({ isChallengeMode: true })}/>
  ))