import { strSuffix } from './format'
import { getNumber } from './number'

/**
 * add % unit to given number and return as string
 *
 * @param   {number} number                     input number
 * @param   {boolean} [scaleToHundred = true]   scale 0.10 to 10%
 * @return  {string}
 */
export const unitPercentage = (number, scaleToHundred = true) => {
  return strSuffix(getNumber(number, false) * ( scaleToHundred ? 100 : 1 ), '%')
}

/**
 * add px unit to given number and return as string
 *
 * @param   {number} number
 * @return  {string}
 */
export const unitPixelate = (number) => strSuffix(getNumber(number, false), 'px')