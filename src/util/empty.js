/**
 * Check if the obj is empty
 * @param   {Object} obj  input object
 *
 * @return  {Boolean}
 */
export function isObjEmpty(obj) {
  return obj.constructor === Object && Object.keys(obj).length === 0
}

/**
 * Array empty check
 * @param   {Array} arr   input array
 *
 * @return {Boolean}
 */
export function isArrayEmpty(arr) {
  return arr.constructor === Array && arr.length === 0
}

/**
 * Value check if it is empty
 * @param value
 * @return {boolean|Boolean}
 */
export function isValueEmpty(value) {
  return (!value && value !== false) // using falsy value ability expect false itself
    || isObjEmpty(value)
    || isArrayEmpty(value)
}