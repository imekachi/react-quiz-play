import React from 'react'
import { connect } from 'react-redux'
import { change } from 'redux-form'

import { FORM_NAMES } from '../constants/quiz'
import { actions as runtimeActions } from '../reducers/runtime'
import { getFieldName } from './FormPlay'

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
    onCommitAnswer: async (event) => {
      event.preventDefault()
      await dispatch(change(FORM_NAMES.QUIZ_PLAY, ownProps.input.name, ownProps.value))
      await dispatch(runtimeActions.questionAnswered(ownProps, event))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChoiceItem)