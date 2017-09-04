import React from 'react'

import PlayPage from '../components/PagePlay/index'
import { getMockupData } from './mockupData'
import { generateWrapper } from './MockupWrapper'
import { makeStoriesOf } from './util'

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