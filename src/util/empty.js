/**
 * Check if the obj is empty ( hasOwnProperty )
 * note that this is ES5+ feature
 *
 * @param   { Object } obj     input object
 *
 * @return  { Boolean }
 */
export function isObjEmpty(obj) {
  return Object.keys(obj).length === 0 && obj.constructor === Object
}

export function isValueEmpty(value) {
  return !value && value !== false // using falsy value ability expect false itself
}