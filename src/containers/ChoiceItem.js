import { connect } from 'react-redux'
import { change } from 'redux-form'

import { FORM_NAME } from '../constants/quiz'
import { getFieldName } from './QuestionStream'
import ChoiceItemComponent from '../components/PagePlay/question-box/ChoiceItem'

const mapStateToProps = (state, ownProps) => {
  const form = state.form[FORM_NAME.QUIZ_PLAY]
  return {
    isActive: !!(form && form.values && form.values[getFieldName(ownProps.questionNumber)] === ownProps.value),
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChoiceClick: (event) => {
      event.preventDefault()
      dispatch(change(FORM_NAME.QUIZ_PLAY, ownProps.input.name, ownProps.value))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChoiceItemComponent)