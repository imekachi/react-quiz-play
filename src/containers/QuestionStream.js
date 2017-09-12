import { connect } from 'react-redux'

import QuestionStreamComponent from '../components/PagePlay/QuestionStream'
import { QUIZ_TYPES } from '../constants/quiz'
import { getIsSingleQuestion } from '../reducers/quiz'
import { getCurrentQuestionStream } from '../reducers/runtime'
import { getFieldName } from '../form'

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