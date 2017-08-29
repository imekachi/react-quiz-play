import { reduxForm } from 'redux-form'
import Validator from 'validatorjs'
import { makeArrayOf } from '../util/array'
import { strPadding } from '../util/format'
// UI
import PagePlayComponent from '../components/PagePlay/index'
import { FORM_NAME } from '../constants/quiz'

export const getFieldName = (questionNumber) => `question-${strPadding(questionNumber, 3, '0')}`

export const getChoiceId = (questionNumber, choiceValue) => `${strPadding(questionNumber, 3, '0')}-${choiceValue}`
// export const extractChoiceId = (choiceId) => {
//   const fragments = choiceId.split('-')
//   return {
//     questionNumber: getNumber(fragments[0]),
//     value         : getNumber(fragments[1]),
//   }
// }

const validate = (formData, ownProps) => {
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

const FormPlay = reduxForm({
  form: FORM_NAME.QUIZ_PLAY,
  validate,
})(PagePlayComponent)

export default FormPlay