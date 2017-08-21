import { connect } from 'react-redux'
import { getNumber } from '../util/number'
import { actions as runtimeActions } from '../reducers/runtime'
import { extractChoiceId } from '../components/PagePlay/question-box/ChoiceBox'
import ChoiceItemComponent from '../components/PagePlay/question-box/ChoiceItem'


const mapStateToProps = (state, ownProps) => {
  return {
    isActive: state.runtime.chosenChoices[ownProps.questionNumber - 1] === ownProps.value,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChoiceClick: (event) => {
      const choiceId = event.currentTarget.getAttribute('data-choice-id')
      const choiceIndexData = extractChoiceId(choiceId)
      dispatch(runtimeActions.addAnswer(choiceIndexData.questionNumber, choiceIndexData.value))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChoiceItemComponent)