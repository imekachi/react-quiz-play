import React from 'react'
import { connect } from 'react-redux'
import { change } from 'redux-form'
import { actions as runtimeActions } from '../reducers/runtime'

import { FORM_NAMES } from '../constants/quiz'
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
    onCommitAnswer: (event) => {
      event.preventDefault()
      dispatch(change(FORM_NAMES.QUIZ_PLAY, ownProps.input.name, ownProps.value))
      dispatch(runtimeActions.questionAnswered())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChoiceItem)