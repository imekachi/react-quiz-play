import React from 'react'

import { makeButtonWithStates } from './ButtonWithStates'
import Icon from './Icon'

const VoteMessage = () => {
  const SubmitBtn = makeButtonWithStates({
    tagName    : 'a',
    stateConfig: {
      ready  : {
        text: 'ส่งข้อความ',
      },
      loading: {
        icon: 'fa-spinner fa-spin',
        text: 'กำลังส่ง',
      },
      success: {
        icon: 'fa-check',
        text: 'ส่งเรียบร้อย',
      },
    },
  })

  return (
    <form className="quiz-msgtocreater-box -show">
      <label className="header" htmlFor="input-msgtocreator">
        <Icon className="fa-comment"/> ฝากข้อความถึงผู้สร้างควิซ
      </label>
      <textarea id="input-msgtocreator" className="forminput" name="input-msgtocreater"
                placeholder="ส่งข้อความให้กำลังใจผู้สร้าง"/>

      <div className="action-button-wrapper">
        <a className="cancelbutton" title="ไม่ฝากข้อความ">ไม่ฝากข้อความ</a>
        <SubmitBtn className="submitbutton"/>
      </div>

      <a className="calcelbutton js-cancel-vote" title="ปิด">
        <Icon className="fa-times"/>
      </a>
    </form>
  )
}

export default VoteMessage