import { connect } from 'react-redux'
import { actions as runtimeActions } from '../reducers/runtime'
import { change } from 'redux-form'

import ChoiceItemComponent from '../components/PagePlay/question-box/ChoiceItem'
import { FORM_NAME } from '../constants/quizConst'

const mapStateToProps = (state, ownProps) => {
  return {
    isActive: state.runtime.chosenChoices[ownProps.questionNumber - 1] === ownProps.value,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChoiceClick: (event) => {
      event.preventDefault()
      console.log('>> ownProps: ', ownProps)
      dispatch(change(FORM_NAME.QUIZ_PLAY, ownProps.input.name, ownProps.value))
      dispatch(runtimeActions.addAnswer(ownProps.questionNumber, ownProps.value))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChoiceItemComponent)