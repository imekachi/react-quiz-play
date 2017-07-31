import { getNumber } from './numbers'
import { strSuffix } from './format'

/**
 * add % unit to given number and return as string
 *
 * @param   {Number} number                     input number
 * @param   {Boolean} [scaleToHundred = true]   scale 0.10 to 10%
 *
 * @returns {String}
 */
export function unitPercentage(number, scaleToHundred = true) {
  return strSuffix(getNumber(number, false) * ( scaleToHundred ? 100 : 1 ), '%')
}

/**
 * add px unit to given number and return as string
 *
 * @param   {Number} number
 *
 * @returns {String}
 */
export function unitPixelate(number) {
  return strSuffix(getNumber(number, false), 'px')
}