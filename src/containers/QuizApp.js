import React from 'react'
import { connect } from 'react-redux'
// DATA
import { actions as quizActions, getIsResultPage } from '../reducers/quiz'
import { QUIZ_STATES } from '../constants/quiz'
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
      case QUIZ_STATES.INIT: {
        return <PageInit/>
      }

      case QUIZ_STATES.PLAY: {
        return <PagePlay/>
      }

      case QUIZ_STATES.END: {
        return <ResultPage/>
      }

      case QUIZ_STATES.LOADING: {
        return <Loader/>
      }

      default: {
        return <Loader retry={{ onClick: this.props.quizRetry }}/>
      }
    }
  }

  render() {
    return (
      <MainWrapper fullWidth={this.props.isResultPage}>
        {this.getComponentToRender()}
      </MainWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    quizState   : state.quiz.quizState,
    isResultPage: getIsResultPage(state),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    quizInit : () => dispatch(quizActions.init()),
    quizRetry: () => dispatch(quizActions.retryFetch()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizApp)