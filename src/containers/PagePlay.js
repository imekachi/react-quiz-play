import React from 'react'
import { connect } from 'react-redux'

// DATA
import { actions as runtimeActions, selectAllPage, selectStartQuesiton } from '../reducers/runtime'

// UI
import PagePlayComponent from '../components/PagePlay/index'

@connect(state => {
  return {
    pagingData     : {
      ...state.runtime,
      allPage      : selectAllPage(state),
      startQuestion: selectStartQuesiton(state),
    },
    timerData      : state.quiz.quizInfo.timerData,
  }
})
export default class PagePlay extends React.Component {
  constructor() {
    super()
    this.onClickPrev   = this.onClickPrev.bind(this)
    this.onClickNext   = this.onClickNext.bind(this)
    this.onClickSubmit = this.onClickSubmit.bind(this)
  }

  onClickNext(event) {
    event.preventDefault()
    this.props.dispatch(runtimeActions.nextPage())
  }

  onClickSubmit(event) {
    event.preventDefault()

  }

  onClickPrev(event) {
    event.preventDefault()
  }

  render() {
    return (
      <PagePlayComponent
        pagingData={this.props.pagingData}
        enableTimer={!!this.props.timerData}
        questionControlHandlers={{
          onClickPrev  : this.onClickPrev,
          onClickNext  : this.onClickNext,
          onClickSubmit: this.onClickSubmit,
        }}
      />
    )
  }
}