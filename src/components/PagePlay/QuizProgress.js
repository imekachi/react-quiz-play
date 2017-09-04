import React from 'react'
import styled from 'styled-components'

import { capBetween } from '../../util/number'
import { scale } from '../../util/scaling'
import { unitPercentage } from '../../util/unit'

const ProgressBar = styled.div`
  ${props => props.noSpaceBottom && 'border-radius: 3px 3px 0 0 !important;'}
`

export default class QuizProgressComponent extends React.Component {
  constructor() {
    super()
    this.state = {
      wrapper: {
        width: 0,
      },
      bubble : {
        width: 0,
      },
    }
  }

  updateComponentsDimension() {
    this.setState({
      wrapper: {
        ...this.state.wrapper,
        width: this.progressWrapper.getBoundingClientRect().width,
      },
      bubble : {
        ...this.state.bubble,
        width: this.progressBubble.getBoundingClientRect().width,
      },
    })
  }

  componentDidMount() {
    this.updateComponentsDimension()
  }

  // componentWillReceiveProps() {
  componentDidUpdate() {
    // console.log('>> UPDATED')
    // all changes caused by currentPage or allPage update by props
    this.updateComponentsDimension()
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    // console.group()
    // console.log(`currentPage: ${this.props.currentPage} | ${nextProps.currentPage}`)
    // console.log(`bubbleWidth: ${this.state.bubble.width} | ${nextState.bubble.width}`)
    // console.groupEnd()
    return (this.props.currentPage !== nextProps.currentPage)
      || (this.props.allPage !== nextProps.allPage)
      || (this.state.bubble.width !== nextState.bubble.width)
      || (this.state.wrapper.width !== nextState.wrapper.width)
  }

  render() {
    // console.warn('>> RENDERED')
    const { currentPage, allPage, noSpaceBottom } = this.props

    // calculate values in percentage
    const CAP_PERCENTAGE = 100
    const progressValue  = capBetween(0, currentPage / allPage * 100, CAP_PERCENTAGE)
    const bubbleText     = `${currentPage}/${allPage}`
    const bubbleWidth    = scale(this.state.bubble.width, this.state.wrapper.width, 100)
    const bubbleOffset   = bubbleWidth / 2
    const bubblePosition = capBetween(0, progressValue - bubbleOffset, CAP_PERCENTAGE - bubbleWidth)

    return (
      <div className="quiz-progress-wrapper" ref={element => this.progressWrapper = element}>
        <div className="quiz-progress">
          <div className="progressbubble" ref={element => this.progressBubble = element}
               style={{ left: unitPercentage(bubblePosition, false) }}>
            {bubbleText}
          </div>
          <ProgressBar className="progress-bar" noSpaceBottom={noSpaceBottom}>
            <div className="progress" style={{ width: unitPercentage(progressValue, false) }}/>
          </ProgressBar>
        </div>
      </div>
    )
  }
}