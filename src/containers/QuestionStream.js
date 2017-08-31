import { connect } from 'react-redux'
import { getFieldName } from './FormPlay'
// DATA
import { getCurrentQuestionStream } from '../reducers/runtime'
import { QUIZ_TYPES } from '../constants/quiz'
// UI
import QuestionStreamComponent from '../components/PagePlay/QuestionStream'

const mapStateToProps = (state) => {
  return {
    stream            : getCurrentQuestionStream(state),
    isMobile          : state.quiz.clientData.isMobile,
    hideQuestionNumber: state.quiz.quizInfo.quizType === QUIZ_TYPES.MAZE,
    getFieldName,
  }
}

export default connect(mapStateToProps)(QuestionStreamComponent)