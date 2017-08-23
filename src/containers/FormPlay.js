import { reduxForm } from 'redux-form'
// import Validator from 'validatorjs'

// UI
import PagePlayComponent from '../components/PagePlay/index'
import { FORM_NAME } from '../constants/quizConst'


const FormPlay = reduxForm({
  form: FORM_NAME.QUIZ_PLAY,
})(PagePlayComponent)

export default FormPlay