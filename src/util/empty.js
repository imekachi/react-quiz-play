/**
 * Check if the obj is empty
 *
 * @param   {object} obj  input object
 * @return  {boolean}
 */
export const isObjEmpty = (obj) => {
  return obj.constructor === Object && Object.keys(obj).length === 0
}

/**
 * Array empty check
 *
 * @param   {array} arr   input array
 * @return  {boolean}
 */
export const isArrayEmpty = (arr) => {
  return arr.constructor === Array && arr.length === 0
}

/**
 * Value check if it is empty
 *
 * @param   {*}value
 * @return  {boolean}
 */
export const isValueEmpty = (value) => {
  return (!value && value !== false) // using falsy value ability expect false itself
    || isObjEmpty(value)
    || isArrayEmpty(value)
}