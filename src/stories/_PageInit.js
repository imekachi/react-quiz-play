import React from 'react'

// Data
import { getMockupData } from './mockupData'
import { generateWrapper } from './MockupWrapper'
import { AUTH_DEKD, AUTH_FACEBOOK } from '../constants/authConst'

// Util
import { makeStoriesOf } from './util'

// UI Components
import InitPage from '../components/PageInit/index'

/**
 * Init Page
 */
makeStoriesOf('Init Page/Quiz status')
  .addDecorator(generateWrapper())
  .add('Deleted', () => (
    <InitPage {...getMockupData({
        isNotFound: true,
      },
    )}/>
  ))
  .add('Private', () => (
    <InitPage {...getMockupData({
      isAccessible: false,
    })}/>
  ))

makeStoriesOf('Init Page/Login')
  .addDecorator(generateWrapper())
  .add('Normal', () => (
    <InitPage {...getMockupData({
      timerData: {
        isTimeLimited: false,
      },
      auth     : {
        isLogin: false,
      },
    })}/>
  ))
  .add('Timer', () => (
    <InitPage {...getMockupData({
      auth: {
        isLogin: false,
      },
    })}/>
  ))

makeStoriesOf('Init Page/Ready')
  .addDecorator(generateWrapper())
  .add('LoggedIn with Facebook', () => (
    <InitPage {...getMockupData({
      auth: {
        isLogin     : true,
        loggedInType: AUTH_FACEBOOK,
      },
    })}/>
  ))
  .add('LoggedIn with DekD', () => (
    <InitPage {...getMockupData({
      auth: {
        isLogin     : true,
        loggedInType: AUTH_DEKD,
      },
    })}/>
  ))

// TODO: implement PageInit to handle funnyquiz-random
// TODO: and submit when session expired and user re-login