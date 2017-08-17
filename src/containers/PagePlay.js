import React from 'react'
import { connect } from 'react-redux'

// DATA
import { actions as runtimeActions } from '../reducers/runtime'

// UI
import PagePlayComponent from '../components/PagePlay/index'

@connect(store => {
  return {
    questionCount  : store.quiz.quizData.questionCount,
    questionPerPage: store.quiz.quizData.questionPerPage,
    pagingData     : store.runtime,
    timerData      : store.quiz.quizInfo.timerData,
  }
})
export default class PagePlay extends React.Component {
  constructor() {
    super()
    this.onClickPrev   = this.onClickPrev.bind(this)
    this.onClickNext   = this.onClickNext.bind(this)
    this.onClickSubmit = this.onClickSubmit.bind(this)
  }

  componentDidMount() {
    this.props.dispatch(runtimeActions.init(this.props.questionCount, this.props.questionPerPage))
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
          onClickPrev: this.onClickPrev,
          onClickNext: this.onClickNext,
          onClickSubmit: this.onClickSubmit,
        }}
      />
    )
  }
}