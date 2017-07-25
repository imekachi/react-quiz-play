import { getNumber } from './numbers'
import { capMin } from './numbers'

/**
 * numberFormat
 * returns formatted number as a string
 *
 * numberFormat(-1234567)           // "-1,234,567"
 * numberFormat(1234.556)           // "1,235"
 * numberFormat(1234.556, 2)        // "1,234.56"
 *
 * @param   { String | Number }   data            input string or number
 * @param   { Number }            [precision = 0] define precision if 0, the input gets rounded
 *
 * @return  { String }
 */
export function numberFormat(data, precision = 0) {
  let numberParts = getNumber(data, (!precision > 0)).toFixed(precision).split('.')
  numberParts[0]  = numberParts[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,')
  return numberParts.join('.')
}

/**
 * camelToSnake
 * returns snake-case by formatting camelCase
 * @param   { String } string   camelCase string
 *
 * @return  { String }
 */
export function camelToSnake(string) {
  return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}

export function strPadding(input, maxPadding = 2, paddingChar = '0') {
  // if ES2017 proposal get standardized you can use line below
  // return input.toString().padStart(padding, char)
  const numberOfPadding = capMin(maxPadding - input.toString().length, 0)
  return paddingChar.repeat(numberOfPadding) + input
}