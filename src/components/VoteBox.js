import React from 'react'
import Icon from './Icon'
import VoteMessage from './VoteMessage'
import { isValueEmpty } from '../util/empty'

export default class VoteBox extends React.Component {
  constructor() {
    super()
    this.state = {
      showVoteMsgBox: false,
      voteValue     : null,
    }

    this.toggleVoteMsgBox = this.toggleVoteMsgBox.bind(this)
  }

  toggleVoteMsgBox(forceDisplay) {
    this.setState({
      showVoteMsgBox: !isValueEmpty(forceDisplay) ? forceDisplay : !this.state.showVoteMsgBox,
    })
  }

  voteBtnHandler(value, event) {
    event.preventDefault()
    this.setState({
      voteValue: value,
    })

    this.toggleVoteMsgBox()
  }

  render() {
    return (
      <div className="quiz-vote-wrapper">
        {/* status label */}
        <div className="header-mask">
          <div className="header">คุณชอบควิซนี้มั้ย</div>
          <div className="header -like">คุณโหวตควิซนี้เรียบร้อยแล้ว</div>
          <div className="header -dislike">คุณโหวตควิซนี้เรียบร้อยแล้ว</div>
        </div>

        {/* Vote Actions */}
        <div className="quiz-vote-box">
          <button className="vote-button -like dekdbutton -outline -green" title="ชอบควิซนี้"
                  onClick={this.voteBtnHandler.bind(this, 'like')}>
            <Icon className="fa-thumbs-up"/> <span className="statcount">{this.props.likeCount || 0} คน</span>
            <div className="label">ชอบควิซนี้</div>
          </button>
          <button className="vote-button -dislike dekdbutton -outline -red" title="ไม่ชอบควิซนี้"
                  onClick={this.voteBtnHandler.bind(this, 'dislike')}>
            <Icon className="fa-thumbs-down"/> <span className="statcount">{this.props.dislikeCount || 0} คน</span>
            <div className="label">ไม่ชอบควิซนี้</div>
          </button>

          {this.state.showVoteMsgBox && (
            <VoteMessage/>
          )}
        </div>
      </div>
    )
  }
}