import { reduxForm } from 'redux-form'

import PagePlayComponent from '../components/PagePlay/index'
import { FORM_NAMES } from '../constants/quiz'
import { validate, onSubmit } from '../form'

const FormPlay = reduxForm({
  form: FORM_NAMES.QUIZ_PLAY,
  onSubmit,
  validate,
})(PagePlayComponent)

export default FormPlay