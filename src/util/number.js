/**
 * isNumber
 * check if input data is a valid number
 * @param   {*} data  input data
 * @return  {boolean}
 */
export const isNumber = (data) => (!isNaN(parseFloat(data))) && isFinite(data)

/**
 * getNumber
 * stripping all non numeric character but reserve negativity number and decimal precisions
 * and returns a number ( Integer by default, but you can disable rounding, it will return float )
 *
 * getNumber('-1,234.43')           // -1234
 * getNumber('-12.54')              // -13
 * getNumber('1,234.445', false)    // 1234.445
 *
 * @param   {string|number} data        input string or number
 * @param   {boolean} [isRound = false] option if you want the number rounded or raw float
 * @return  {Number}
 */
export const getNumber = (data, isRound = false) => {
  let number = parseFloat(String(data).replace(/(?!^-)[^(\d|.)]/g, ''))
  number     = isNaN(number) ? 0 : number

  return isRound ? Math.round(number) : number
}

/**
 * Cap number, make sure it won't go below given minimum
 *
 * @param   {number} inputNumber
 * @param   {number} min
 * @return  {number} cappedValue
 */
export const capMin = (inputNumber, min) => Math.max(inputNumber, min)

/**
 * Cap number, make sure it won't go above given maximum
 *
 * @param   {number} inputNumber
 * @param   {number} max
 * @return  {number} cappedValue
 */
export const capMax = (inputNumber, max) => Math.min(inputNumber, max)

/**
 * Cap number, make sure it won't go above and below given cap
 *
 * @param   {number}  inputNumber
 * @param   {number}  min
 * @param   {number}  max
 * @return  {number} cappedValue
 */
export const capBetween = (min, inputNumber, max) => capMax(capMin(inputNumber, min), max)