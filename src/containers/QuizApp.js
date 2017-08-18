import React from 'react'
import { connect } from 'react-redux'

// DATA
import { actions as QuizActions } from '../reducers/quiz'
import { QUIZ_STATE } from '../constants/quizConst'

// UI
import MainWrapper from '../components/MainWrapper'
import Loader from '../components/Loader'
import ResultPage from './PageResult'
import PageInit from './PageInit'
import PagePlay from './PagePlay'

@connect(state => {
  return {
    quizState: state.quiz.quizState,
  }
})
export default class QuizApp extends React.Component {
  componentDidMount() {
    this.props.dispatch(QuizActions.init())
  }

  getComponentToRender() {
    switch (this.props.quizState) {
      case QUIZ_STATE.INIT: {
        return <PageInit/>
      }

      case QUIZ_STATE.PLAY: {
        return <PagePlay/>
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
      <MainWrapper>
        {this.getComponentToRender()}
      </MainWrapper>
    )
  }
}