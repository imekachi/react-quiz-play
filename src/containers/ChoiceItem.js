import React from 'react'
import { connect } from 'react-redux'

import { FORM_NAMES } from '../constants/quiz'
import { getFieldName } from '../form'
import { actions as runtimeActions } from '../reducers/runtime'

class ChoiceItem extends React.Component {
  render() {
    const { component: Component, ...passThroughProps } = this.props
    return (
      <Component {...passThroughProps}/>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const form = state.form[FORM_NAMES.QUIZ_PLAY]
  return {
    isActive: !!ownProps.isMultipleChoice && !!(form && form.values && form.values[getFieldName(ownProps.questionNumber)] === ownProps.value),
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onCommitAnswer: (event) => {
      event.preventDefault()
      dispatch(runtimeActions.questionAnswered(ownProps, event))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChoiceItem)