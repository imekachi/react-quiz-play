/**
 * isNumber
 * check if input data is a valid number
 * @param { * }   data    input data
 *
 * @returns { Boolean }
 */
export function isNumber(data) {
  return (!isNaN(parseFloat(data))) && isFinite(data)
}