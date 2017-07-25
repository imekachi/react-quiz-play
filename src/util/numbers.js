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
 * @param   { Boolean }           [isRound = true]    option if you want the number rounded or raw float
 *
 * @return  { Number }
 */
export function getNumber(data, isRound = true) {
  let number = parseFloat(String(data).replace(/(?!^-)[^(\d|.)]/g, ''))
  number     = isNaN(number) ? 0 : number
  return isRound ? Math.round(number) : number
}

/**
 * Cap number, make sure it won't go below given minimun
 * @param   { Number }  inputNum
 * @param   { Number }  mininum
 *
 * @returns { Number } cappedValue
 */
export function capMin(inputNum, mininum) {
  return Math.max(inputNum, mininum)
}

/**
 * Cap number, make sure it won't go above given maximum
 * @param   { Number }  inputNum
 * @param   { Number }  maximum
 *
 * @returns { Number } cappedValue
 */
export function capMax(inputNum, maximum) {
  return Math.min(inputNum, maximum)
}