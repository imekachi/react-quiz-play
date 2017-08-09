import React from 'react'

// Data
import { getMockupData } from './mockupData'
import { generateWrapper } from './MockupWrapper'

// Util
import { makeStoriesOf } from './util'

// UI Components
import InitPage from '../pages/InitPage'

/**
 * Init Page
 */
makeStoriesOf('Init Page')
  .addDecorator(generateWrapper())
  .add('login', () => (
    <InitPage {...getMockupData()}/>
  ))
  .add('play', () => (
    <InitPage {...getMockupData({ isLogin: true })}/>
  ))
