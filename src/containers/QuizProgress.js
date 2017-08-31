import { connect } from 'react-redux'
import QuizProgressComponent from '../components/PagePlay/QuizProgress'
import { getAllPage, getCurrentPage } from '../reducers/runtime'

const mapStateToProps = (state) => {
  return {
    currentPage: getCurrentPage(state),
    allPage    : getAllPage(state),
  }
}

export default connect(mapStateToProps)(QuizProgressComponent)