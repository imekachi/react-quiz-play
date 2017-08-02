import React from 'react'

import CoverImg from '../components/page-init/CoverImg'
import TimerInfo from '../components/page-init/TimerInfo'
import ActionBox from '../components/page-init/ActionBox'

export default class InitPage extends React.Component {
  render() {
    return (
      <div className="start-quiz-box init-state">
        <CoverImg src={this.props.quizCover}/>
        <TimerInfo {...this.props.timerData} />
        <ActionBox isLogin={this.props.isLogin}/>
      </div>
    )
  }
}