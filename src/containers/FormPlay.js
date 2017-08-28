import { reduxForm } from 'redux-form'
import Validator from 'validatorjs'
import { makeArrayOf } from '../util/array'

// UI
import PagePlayComponent from '../components/PagePlay/index'
import { FORM_NAME } from '../constants/quiz'
import { getFieldName } from './QuestionStream'

const validate = (formData, ownProps) => {
  const validatingData = makeArrayOf(ownProps.questionCount).reduce((buffer, _, index) => {
    const fieldName = getFieldName(index + 1)
    Object.assign(buffer.rules, { [fieldName]: 'required' })
    Object.assign(buffer.messages, { [`required.${fieldName}`]: `กรุณาตอบข้อ ${index + 1}` })

    return buffer
  }, { rules: {}, messages: {} })
  // console.log('>> validatingData: ', validatingData)

  const validation = new Validator(formData, validatingData.rules, validatingData.messages)
  validation.passes()

  // console.log('>> validation: ', validation)
  return validation.errors.all()
}

const FormPlay = reduxForm({
  form: FORM_NAME.QUIZ_PLAY,
  validate,
})(PagePlayComponent)

export default FormPlay