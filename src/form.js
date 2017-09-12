import Validator from 'validatorjs'

import { actions as quizActions } from './reducers/quiz'
import { makeArrayOf } from './util/array'
import { strPadding } from './util/format'
import { getNumber } from './util/number'

export const getFieldName                   = questionNumber => `question-${strPadding(questionNumber, 3, '0')}`
export const getQuestionNumberFromFieldName = fieldName => getNumber(fieldName)

export const getChoiceId = (questionNumber, choiceValue) => `${strPadding(questionNumber, 3, '0')}-${choiceValue}`
// export const extractChoiceId = (choiceId) => {
//   const fragments = choiceId.split('-')
//   return {
//     questionNumber: getNumber(fragments[0]),
//     value         : getNumber(fragments[1]),
//   }
// }

export const validate = (formData, ownProps) => {
  const validatingData = makeArrayOf(ownProps.questionCount).reduce((buffer, _, index) => {
    const fieldName = getFieldName(index + 1)
    Object.assign(buffer.rules, { [fieldName]: 'required' })
    Object.assign(buffer.messages, { [`required.${fieldName}`]: `กรุณาตอบข้อ ${index + 1}` })

    return buffer
  }, { rules: {}, messages: {} })

  const validation = new Validator(formData, validatingData.rules, validatingData.messages)
  validation.passes()

  return validation.errors.all()
}

export const onSubmit = (data, dispatch) => {
  return dispatch(quizActions.submit(data))
}