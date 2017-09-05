import { capMin, getNumber } from './number'

/**
 * numberFormat
 * returns formatted number as a string
 *
 * numberFormat(-1234567)     // "-1,234,567"
 * numberFormat(1234.556)     // "1,235"
 * numberFormat(1234.556, 2)  // "1,234.56"
 *
 * @param   {string|number} number    input string or number
 * @param   {number} [precision = 0]  define precision if 0, the input gets rounded
 * @return  {string}
 */
export const numberFormat = (number, precision = 0) => {
  let numberParts = getNumber(number, (!precision > 0)).toFixed(precision).split('.')
  numberParts[0]  = numberParts[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,')

  return numberParts.join('.')
}

/**
 * camelToSnake
 * returns snake-case by formatting camelCase
 *
 * @param   {string} str camelCase string
 * @return  {string}
 */
export const camelToSnake = str => str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()

/**
 * strPadding
 * add padding character to a string
 *
 * @param   {string|number} str                 original string you want to pad
 * @param   {number} [maxPadding = 2]           maximum padding
 * @param   {string|number} [paddingChar = '0'] the character you want to fill in
 * @return  {string} paddedString
 */
export const strPadding = (str, maxPadding = 2, paddingChar = '0') => {
  // if ES2017 proposal get standardized you can use line below
  // return input.toString().padStart(padding, char)
  const numberOfPadding = capMin(maxPadding - str.toString().length, 0)
  return paddingChar.toString().repeat(numberOfPadding) + str
}

/**
 * strPrefix
 * make a prefix to string
 *
 * @param   {string|*} str
 * @param   {string|*} prefix
 * @return  {string}
 */
export const strPrefix = (str, prefix) => `${prefix}${str}`

/**
 * strSuffix
 * make a suffix to string
 *
 * @param   {string|*} str
 * @param   {string|*} suffix
 * @return  {string}
 */
export const strSuffix = (str, suffix) => `${str}${suffix}`