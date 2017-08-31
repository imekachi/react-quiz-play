import { connect } from 'react-redux'
import { getFieldName } from './FormPlay'
// DATA
import { getCurrentQuestionStream } from '../reducers/runtime'
import { QUIZ_TYPES } from '../constants/quiz'
// UI
import QuestionStreamComponent from '../components/PagePlay/QuestionStream'
import { getIsSingleQuestion } from '../reducers/quiz'

const mapStateToProps = (state) => {
  return {
    stream            : getCurrentQuestionStream(state),
    isSingleQuestion  : getIsSingleQuestion(state),
    isMobile          : state.quiz.clientData.isMobile,
    hideQuestionNumber: state.quiz.quizInfo.quizType === QUIZ_TYPES.MAZE,
    getFieldName,
  }
}

export default connect(mapStateToProps)(QuestionStreamComponent)