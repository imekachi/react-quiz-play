/**
 * Check if the obj is empty
 *
 * @param   {object} obj  input object
 * @return  {boolean}
 */
export const isObjEmpty = obj => obj.constructor === Object && Object.keys(obj).length === 0

/**
 * Array empty check
 *
 * @param   {Array} arr   input array
 * @return  {boolean}
 */
export const isArrayEmpty = arr => arr.constructor === Array && arr.length === 0

/**
 * Value check if it is empty
 *
 * @param   {*}value
 * @return  {boolean}
 */
export const isValueEmpty = (value) => {
  return (!value && value !== false) // check falsy value but exclude false itself
    || isObjEmpty(value)
    || isArrayEmpty(value)
}