import React from 'react'

import AutoShareBox from '../AutoShareBox'
import { makeButtonWithStates } from '../ButtonWithStates'

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
    <PlayBtn className="playbutton -lg _margin-top-sm"/>
    <AutoShareBox id="autoshare-initpage"/>
  </div>
)

export default ActionBoxPlay