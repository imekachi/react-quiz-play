import React from 'react'

import ButtonWithStates from '../ButtonWithStates'

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
        <ButtonWithStates
          key="PlayChallenge"
          className="js-challenge-mode playbutton -lg -green"
          title="เล่นควิซโหมดแข่งขัน (สามารถเลือกท้าเพื่อนได้หลังเล่นจบ)"
          stateConfig={{
            ready  : {
              icon: 'fa-group _icon-size',
              text: 'เล่นควิซโหมดแข่งขัน',
            },
            loading: {
              icon: 'fa-spinner fa-spin',
              text: 'ตรวจสอบการเข้าสู่ระบบ',
            },
          }}/>
      ),
      (
        <ButtonWithStates
          key="PlayNormal"
          className="js-normal-mode js-btn-play playbutton -lg _margin-top-sm"
          title="เล่นควิซโหมดปกติ"
          stateConfig={{
            ready: {
              icon: 'fa-user _icon-size',
              text: 'เล่นควิซโหมดปกติ',
            },
          }}/>
      ),
    ]

    const loginButtons = [
      (
        <ButtonWithStates
          key="LoginFacebook"
          tagName="a" className="js-login-facebook loginbutton -lg -social-facebook"
          title="เล่นควิซด้วย Facebook"
          stateConfig={{
            ready  : {
              icon: 'fa-facebook',
              text: 'เล่นควิซด้วย Facebook',
            },
            loading: {
              icon: 'fa-spinner fa-spin',
              text: 'ตรวจสอบการเข้าสู่ระบบ',
            },
          }}/>
      ),
      (
        <ButtonWithStates
          key="LoginDekD"
          className="js-login-dekd loginbutton -lg -dekd _margin-top-sm "
          title="เล่นควิซด้วย Facebook"
          stateConfig={{
            ready: {
              icon: 'fa-group _icon-size',
              text: 'เล่นควิซด้วย Dek-D',
            },
          }}/>
      ),
    ]

    console.log('>> playButtons: ', playButtons)
    console.log('>> loginButtons: ', loginButtons)

    return (
      <div className={`action-button-box${this.state.isLogin ? ' -play' : ''}`}>

        {this.state.isLogin ? playButtons : loginButtons}

        <div className="remark-box">
          <input type="checkbox" className="formcheckbox sharecheckbox" id="autoshare"/>
          <label htmlFor="autoshare" className="checkboxlabel">แชร์ผลลัพธ์ไปยัง Facebook</label>
        </div>
      </div>
    )
  }
}