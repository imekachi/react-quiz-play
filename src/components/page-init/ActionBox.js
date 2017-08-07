import React from 'react'

import AutoShareBox from '../AutoShareBox'
import { makeButtonWithStates } from '../ButtonWithStates'
import { combineClassNames } from '../../util/string'
import { iF } from '../../util/condition'

const LoginFacebookBtn = makeButtonWithStates({
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

const LoginDekdBtn = makeButtonWithStates({
  stateConfig: {
    ready: {
      icon: 'fa-group _icon-size',
      text: 'เล่นควิซด้วย Dek-D',
    },
  },
})

const PlayBtn = makeButtonWithStates({
  stateConfig: {
    ready: {
      icon: 'fa-play _icon-size',
      text: 'เริ่มเล่นควิซ',
    },
  },
})

export default class ActionBox extends React.Component {
  render() {
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
      <div className={combineClassNames('action-button-box', iF(this.props.isLogin, '-play'))}>
        {
          this.props.isLogin
            ? <PlayBtn className="js-normal-mode js-btn-play playbutton -lg _margin-top-sm"/>
            : loginButtons
        }
        <AutoShareBox id="autoshare-initpage"/>
      </div>
    )
  }
}