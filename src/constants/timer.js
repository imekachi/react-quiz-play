import { getFieldName } from '../form'
import { FORM_NAMES } from './quiz'

export const TIMER_TYPES = {
  ALL : 'TIMER_ALL',
  EACH: 'TIMER_EACH_QUESTION',
}

/**
 * if receive questionNumber, return timerName for the question
 * if not, return name of globalTimer
 *
 * @param   {number} [questionNumber]
 * @return  {string} timerName
 */
export const getTimerName = questionNumber => questionNumber ? getFieldName(questionNumber) : FORM_NAMES.QUIZ_PLAY