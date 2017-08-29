import React from 'react'
import { connect } from 'react-redux'
// DATA
import { actions as quizActions } from '../reducers/quiz'
import { QUIZ_STATE } from '../constants/quiz'
// UI
import MainWrapper from '../components/MainWrapper'
import Loader from '../components/Loader'
import ResultPage from './PageResult'
import PageInit from './PageInit'
import PagePlay from './PagePlay'

class QuizApp extends React.Component {
  componentDidMount() {
    this.props.quizInit()
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

      case QUIZ_STATE.LOADING: {
        return <Loader/>
      }

      default: {
        return <Loader retry={{ onClick: this.props.quizRetry }}/>
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

const mapStateToProps = (state) => {
  return {
    quizState: state.quiz.quizState,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    quizInit : () => dispatch(quizActions.init()),
    quizRetry: () => dispatch(quizActions.retryFetch()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizApp)