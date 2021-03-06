import React from 'react'

import AutoShareBox from '../AutoShareBox'
import { makeButtonWithStates } from '../ButtonWithStates'

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

const ActionBoxLogin = ({ isFBLoading }) => (
  <div className="action-button-box">
    <LoginFacebookBtn loading={isFBLoading} className="loginbutton -lg -social-facebook"
                      title="เล่นควิซด้วย Facebook"/>
    <LoginDekdBtn className="loginbutton -lg -dekd _margin-top-sm" title="เล่นควิซด้วย Facebook"/>
    <AutoShareBox id="autoshare-initpage"/>
  </div>
)

export default ActionBoxLogin