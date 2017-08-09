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
  .add('Login screen', () => (
    <InitPage {...getMockupData()}/>
  ))
  .add('Play screen', () => (
    <InitPage {...getMockupData({ isLogin: true })}/>
  ))
