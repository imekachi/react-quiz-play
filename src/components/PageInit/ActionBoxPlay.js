import React from 'react'

import { makeButtonWithStates } from '../ButtonWithStates'
import { AUTH_DEKD } from '../../constants/authConst'

import AutoShareBox from '../AutoShareBox'

const PlayBtn = makeButtonWithStates({
  stateConfig: {
    ready: {
      icon: 'fa-play _icon-size',
      text: 'เริ่มเล่นควิซ',
    },
  },
})

const ActionBoxPlay = (props) => (
  <div className="action-button-box">
    <PlayBtn className="playbutton -lg _margin-top-sm" onClick={props.playClickHandler}/>
    <AutoShareBox forceUnchecked={props.loggedInType === AUTH_DEKD} id="autoshare-initpage"/>
  </div>
)

export default ActionBoxPlay