import { connect } from 'react-redux'

// DATA
import { getCurrentQuestionStream } from '../reducers/runtime'

// UI
import QuestionStreamComponent from '../components/PagePlay/QuestionStream'

const mapStateToProps = (state) => {
  return {
    stream: getCurrentQuestionStream(state),
  }
}

export default connect(mapStateToProps)(QuestionStreamComponent)