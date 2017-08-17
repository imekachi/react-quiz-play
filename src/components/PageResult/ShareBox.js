import React from 'react'

import MessageBox from '../MessageBox'
import Icon from '../Icon'
import { makeButtonWithStates } from '../ButtonWithStates'

export default class ShareBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fbStatus: this.props.fbStatus || 'ready',
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      fbStatus: nextProps.fbStatus,
    })
  }

  render() {
    const FacebookBtn = makeButtonWithStates({
      stateConfig: {
        ready           : {
          icon: 'fa-facebook-square _hidden-xs-down',
          text: 'แชร์ผลลัพธ์ผ่าน Facebook',
        },
        loading         : {
          icon: 'fa-spinner fa-spin _hidden-xs-down',
          text: 'กำลังแชร์ผลลัพธ์',
        },
        success         : {
          icon: 'fa-check _hidden-xs-down',
          text: 'แชร์ผลลัพธ์สำเร็จ',
        },
        permissionDenied: {
          icon: 'fa-gear _hidden-xs-down',
          text: 'ตั้งค่าการโพสบน Facebook',
        },
      },
    })

    return (
      <div className="share-box">
        {this.props.isChallengeMode && (
          <button className="dekdbutton challengeinvite -lg" title="ดูอันดับคะแนน">
            <Icon className="fa-trophy"/> ดูอันดับคะแนน
          </button>
        )}

        {this.state.fbStatus === 'permissionDenied' && (
          <div className="permissionshare-msg-box">
            <MessageBox type="error">
              การแชร์ผลลัพธ์ผ่าน Facebook <br/>
              คุณต้องตั้งค่าอนุญาตให้สามารถโพสข้อความได้
            </MessageBox>
          </div>
        )}

        <FacebookBtn {...{ [this.state.fbStatus]: true }}
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

            {this.props.isMobile ? (
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
}