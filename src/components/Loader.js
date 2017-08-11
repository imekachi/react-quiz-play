import React from 'react'

import FBLikeBox from './FBLikeBox'
import Icon from './Icon'

const Loader = (props) => (
  <div className="animation-loading-page -show-fb-like _txt-center">
    <div className="animation-loading-box">
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
    </div>
  </div>
)

export default Loader