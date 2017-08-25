import { connect } from 'react-redux'
import { strPadding } from '../util/format'

// DATA
import { getCurrentQuestionStream } from '../reducers/runtime'
import { QUIZ_TYPE } from '../constants/quizConst'

// UI
import QuestionStreamComponent from '../components/PagePlay/QuestionStream'

// export const getFieldName = (questionNumber) => `answer[${questionNumber - 1}]`
export const getFieldName = (questionNumber) => `question-${strPadding(questionNumber, 3, '0')}`

const mapStateToProps = (state) => {
  return {
    stream            : getCurrentQuestionStream(state),
    isMobile          : state.quiz.clientData.isMobile,
    hideQuestionNumber: state.quiz.quizInfo.quizType === QUIZ_TYPE.MAZE,
    getFieldName,
  }
}

export default connect(mapStateToProps)(QuestionStreamComponent)