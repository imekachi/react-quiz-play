import React from 'react'
import { connect } from 'react-redux'

// DATA
import { actions as QuizActions } from '../reducers/quiz'
import { QUIZ_STATE } from '../constants/quizConst'

// UI
import MainWrapper from '../components/MainWrapper'
import Loader from '../components/Loader'
import PageInit from './PageInit'
import PlayPage from '../pages/PlayPage'
import ResultPage from '../pages/ResultPage'

@connect(store => {
  return {
    quizData : store.quiz.quizData,
    quizState: store.quiz.quizState,
  }
})
export default class QuizApp extends React.Component {
  componentDidMount() {
    this.props.dispatch(QuizActions.fetchQuiz())
  }

  getComponentToRender() {
    switch (this.props.quizState) {
      case QUIZ_STATE.INIT: {
        return <PageInit/>
      }

      case QUIZ_STATE.PLAY: {
        return <PlayPage {...this.props.quizData}/>
      }

      case QUIZ_STATE.END: {
        return <ResultPage/>
      }

      default: {
        return <Loader/>
      }
    }
  }

  render() {
    return (
      <MainWrapper pageToRender={this.getComponentToRender()}/>
    )
  }
}