import React from 'react'

// Data
import { getMockupData } from './mockupData'
import { generateWrapper } from './MockupWrapper'

// Util
import { makeStoriesOf } from './util'

// UI Components
import PlayPage from '../pages/PlayPage'

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