import React from 'react'

import { FACEBOOK_SHARE_STATUS } from '../../constants/social'
import { makeButtonWithStates } from '../ButtonWithStates'
import Icon from '../Icon'
import MessageBox from '../MessageBox'

const FacebookBtn = makeButtonWithStates({
  defaultState: FACEBOOK_SHARE_STATUS.READY,
  stateConfig : {
    [FACEBOOK_SHARE_STATUS.READY]            : {
      icon: 'fa-facebook-square _hidden-xs-down',
      text: 'แชร์ผลลัพธ์ผ่าน Facebook',
    },
    [FACEBOOK_SHARE_STATUS.LOADING]          : {
      icon: 'fa-spinner fa-spin _hidden-xs-down',
      text: 'กำลังแชร์ผลลัพธ์',
    },
    [FACEBOOK_SHARE_STATUS.SUCCESS]          : {
      icon: 'fa-check _hidden-xs-down',
      text: 'แชร์ผลลัพธ์สำเร็จ',
    },
    [FACEBOOK_SHARE_STATUS.PERMISSION_DENIED]: {
      icon: 'fa-gear _hidden-xs-down',
      text: 'ตั้งค่าการโพสบน Facebook',
    },
  },
})

const ShareBox = (props) => {
  const { fbStatus, isChallengeMode, isMobile } = props

  return (
    <div className="share-box">
      {isChallengeMode && (
        <button className="dekdbutton challengeinvite -lg" title="ดูอันดับคะแนน">
          <Icon className="fa-trophy"/> ดูอันดับคะแนน
        </button>
      )}

      {fbStatus === FACEBOOK_SHARE_STATUS.PERMISSION_DENIED && (
        <div className="permissionshare-msg-box">
          <MessageBox type="error">
            การแชร์ผลลัพธ์ผ่าน Facebook <br/>
            คุณต้องตั้งค่าอนุญาตให้สามารถโพสข้อความได้
          </MessageBox>
        </div>
      )}

      <FacebookBtn {...{ [fbStatus]: true }}
                   className="sharebutton -social-facebook -lg js-share-facebook"/>

      <div className="other-social-box">
        <div className="label">แชร์ผ่านช่องทางอื่น</div>
        <div className="button-wrapper">
          <button className="sharebutton dekdbutton -social-twitter quiz-share-twitter"
                  title="แชร์ผ่าน Twitter">
            <Icon className="buttonicon fa-twitter"/>
          </button>
          <button className="sharebutton dekdbutton -social-googleplus quiz-share-google"
                  title="แชร์ผ่าน Google Plus">
            <Icon className="buttonicon fa-google-plus"/>
          </button>

          {isMobile ? (
            <button className="sharebutton dekdbutton -social-line quiz-share-line"
                    title="แชร์ผ่าน Line">
              <Icon baseClass="dekdfont" className="buttonicon -line-messenger"/>
            </button>
          ) : (
            <button className="sharebutton dekdbutton -social-email quiz-share-email"
                    title="แชร์ผ่าน Email">
              <Icon className="buttonicon fa-envelope"/>
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ShareBox