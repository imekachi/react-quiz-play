import React from 'react'

import { makeButtonWithState } from '../ButtonWithStates'
import AutoShareBox from '../AutoShareBox'

const LoginFacebookBtn = makeButtonWithState({
  tagName    : 'a',
  stateConfig: {
    ready  : {
      icon: 'fa-facebook',
      text: 'เล่นควิซด้วย Facebook',
    },
    loading: {
      icon: 'fa-spinner fa-spin',
      text: 'ตรวจสอบการเข้าสู่ระบบ',
    },
  },
})

const LoginDekdBtn = makeButtonWithState({
  stateConfig: {
    ready: {
      icon: 'fa-group _icon-size',
      text: 'เล่นควิซด้วย Dek-D',
    },
  },
})

const PlayChallengeBtn = makeButtonWithState({
  stateConfig: {
    ready  : {
      icon: 'fa-group _icon-size',
      text: 'เล่นควิซโหมดแข่งขัน',
    },
    loading: {
      icon: 'fa-spinner fa-spin',
      text: 'ตรวจสอบการเข้าสู่ระบบ',
    },
  },
})

const PlaySoloBtn = makeButtonWithState({
  stateConfig: {
    ready: {
      icon: 'fa-user _icon-size',
      text: 'เล่นควิซโหมดปกติ',
    },
  },
})

export default class ActionBox extends React.Component {
  constructor() {
    super()
    this.state = {
      isLogin: false,
    }
  }

  render() {
    const playButtons = [
      (
        <PlayChallengeBtn
          key="PlayChallenge"
          className="js-challenge-mode playbutton -lg -green"
          title="เล่นควิซโหมดแข่งขัน (สามารถเลือกท้าเพื่อนได้หลังเล่นจบ)"/>
      ),
      (
        <PlaySoloBtn
          key="PlayNormal"
          className="js-normal-mode js-btn-play playbutton -lg _margin-top-sm"
          title="เล่นควิซโหมดปกติ"
        />
      ),
    ]

    const loginButtons = [
      (
        <LoginFacebookBtn
          loading
          key="LoginFacebook"
          className="js-login-facebook loginbutton -lg -social-facebook"
          title="เล่นควิซด้วย Facebook"/>
      ),
      (
        <LoginDekdBtn
          key="LoginDekD"
          className="js-login-dekd loginbutton -lg -dekd _margin-top-sm "
          title="เล่นควิซด้วย Facebook"/>
      ),
    ]

    return (
      <div className={`action-button-box${this.state.isLogin ? ' -play' : ''}`}>
        {this.state.isLogin ? playButtons : loginButtons}
        <AutoShareBox id="autoshare-initpage"/>
      </div>
    )
  }
}