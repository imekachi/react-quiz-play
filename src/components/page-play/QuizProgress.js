import React from 'react'

import { unitPercentage } from '../../util/unit'
import { capBetween } from '../../util/number'

export default class QuizProgress extends React.Component {

  constructor() {
    super()
    this.state = {
      bubbleWidth: 0,
    }
  }

  componentDidMount() {
    this.setState({
      bubbleWidth: this.getWidth(this.bubbleElement),
    })
    // console.log('>> this.bubbleWidth: ', this.bubbleElement)
    // console.log('>> this.getWidth: ', this.getWidth(this.bubbleElement))
  }

  getWidth(element) {
    return element.clientWidth
  }

  render() {
    const uiStore  = this.props.uiPageStore
    const distance = unitPercentage(capBetween(0, uiStore.currentPage / uiStore.allPage, 1))

    // TODO: calculate the bubble offset to compensate 'left' css property
    return (
      <div className="quiz-progress-wrapper">
        <div className="quiz-progress">
          <div ref={bubbleElement => this.bubbleElement = bubbleElement} className="progressbubble"
               style={{ left: distance }}>{uiStore.currentPage}/{uiStore.allPage}</div>
          <div className="progress-bar">
            <div className="progress" style={{ width: distance }}/>
          </div>
        </div>
      </div>
    )
  }
}