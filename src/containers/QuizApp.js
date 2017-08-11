import React from 'react'
import { connect } from 'react-redux'
import { isValueEmpty } from '../util/empty'


// UI
import Body from '../components/Body'
import Loader from '../components/Loader'
import PlayPage from '../pages/PlayPage'
import InitPage from '../pages/InitPage'

// DATA
import { actions } from '../reducers/quiz'
import { QUIZ_STATE } from '../constants'
import ResultPage from '../pages/ResultPage'

@connect((store) => {
  return {
    quizData: store.quiz.quizData,
    quizState: store.quiz.quizState,
  }
})
export default class QuizApp extends React.Component {
  constructor() {
    super()

    this.renderLoader         = this.renderLoader.bind(this)
    this.renderInitPage       = this.renderInitPage.bind(this)
    this.renderPlayPage       = this.renderPlayPage.bind(this)
    this.renderResultPage     = this.renderResultPage.bind(this)
    this.getComponentToRender = this.getComponentToRender.bind(this)
  }

  componentDidMount() {
    this.props.dispatch(actions.fetchQuiz())
  }

  renderLoader() {
    return <Loader/>
  }

  renderInitPage() {
    return <InitPage {...this.props.quizData}/>
  }

  renderPlayPage() {
    return <PlayPage {...this.props.quizData}/>
  }

  renderResultPage() {
    return <ResultPage/>
  }

  getComponentToRender() {
    if (isValueEmpty(this.props.quizState))
      return this.renderLoader()

    switch (this.props.quizState) {
      case QUIZ_STATE.INIT: {
        return this.renderInitPage()
      }

      case QUIZ_STATE.PLAY: {
        return this.renderPlayPage()
      }

      case QUIZ_STATE.END: {
        return this.renderResultPage()
      }

      default: {
        return this.renderLoader()
      }
    }
  }

  render() {
    return (
      <Body>
        {this.getComponentToRender()}
      </Body>
    )
  }
}