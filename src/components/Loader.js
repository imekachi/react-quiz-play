import React from 'react'

import FBLikeBox from './FBLikeBox'
import Icon from './Icon'

export const AnimationLoading = (props) => (
  <div className="animation-component">
    {props.showFBLikeBox && (
      <FBLikeBox/>
    )}

    <div className="_margin-top-sm _txt-orange-theme" style={{ fontSize: '30px' }}>
      <Icon className="fa-spin fa-spinner"/>
    </div>

    {!props.iconOnly && (
      <div className="loadingtxt">{props.children || props.text || 'กำลังโหลด'}</div>
    )}
  </div>
)

export const RetryBox = ({ onClick, buttonText = 'กรุุณาลองใหม่อีกครั้ง', icon = 'fa-refresh' }) => (
  <div className="animation-component">
    <button className="dekdbutton" onClick={onClick}>
      <Icon className={icon}/> {buttonText}
    </button>
  </div>
)

export const Loader = ({ retry, ...loader }) => (
  <div className="animation-loading-page -show-fb-like _txt-center">
    <div className="animation-loading-box">
      {retry
        ? <RetryBox {...retry}/>
        : <AnimationLoading {...loader}/>
      }
    </div>
  </div>
)

export default Loader