/**
 * getNumber
 * stripping all non numeric character but reserve negativity number and decimal precisions
 * and returns a number ( Integer by default, but you can disable rounding, it will return float )
 *
 * getNumber('-1,234.43')           // -1234
 * getNumber('-12.54')              // -13
 * getNumber('1,234.445', false)    // 1234.445
 *
 * @param   { String | Number }   data                input string or number
 * @param   { Boolean }           [isRound = false]   option if you want the number rounded or raw float
 *
 * @return  { Number }
 */
export function getNumber(data, isRound = false) {
  let number = parseFloat(String(data).replace(/(?!^-)[^(\d|.)]/g, ''))
  number     = isNaN(number) ? 0 : number
  return isRound ? Math.round(number) : number
}

/**
 * Cap number, make sure it won't go below given minimum
 * @param   { Number }  inputNumber
 * @param   { Number }  min
 *
 * @returns { Number } cappedValue
 */
export function capMin(inputNumber, min) {
  return Math.max(inputNumber, min)
}

/**
 * Cap number, make sure it won't go above given maximum
 * @param   { Number }  inputNumber
 * @param   { Number }  max
 *
 * @returns { Number } cappedValue
 */
export function capMax(inputNumber, max) {
  return Math.min(inputNumber, max)
}

/**
 * Cap number, make sure it won't go above and below given cap
 * @param   { Number }  inputNumber
 * @param   { Number }  min
 * @param   { Number }  max
 *
 * @returns { Number } cappedValue
 */
export function capBetween(min, inputNumber, max) {
  return capMax(capMin(inputNumber, min), max)
}