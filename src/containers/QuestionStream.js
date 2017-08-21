import { connect } from 'react-redux'

// DATA
import { getCurrentQuestionStream } from '../reducers/runtime'
import { QUIZ_TYPE } from '../constants/quizConst'

// UI
import QuestionStreamComponent from '../components/PagePlay/QuestionStream'

const mapStateToProps = (state) => {
  return {
    stream            : getCurrentQuestionStream(state),
    isMobile          : state.quiz.clientData.isMobile,
    hideQuestionNumber: state.quiz.quizInfo.quizType === QUIZ_TYPE.MAZE,
  }
}

export default connect(mapStateToProps)(QuestionStreamComponent)