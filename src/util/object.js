/**
 * isObject
 * check if input data is an object
 *
 * @param   {*} data  input data
 * @return  {boolean}
 */
export const isObject = (data) => !!data && typeof data === 'object' && !Array.isArray(data)

/**
 * Deep merge objects
 *
 * @param   {object} target
 * @param   {object} [sources]
 * @return  {object}
 */
export const mergeDeep = (target, ...sources) => {
  // check if there is still any source
  if (!sources.length) return target

  // pop source out one by one
  const source = sources.shift()

  if (isObject(target) && isObject(source)) {
    for (let key in source) {
      if (source.hasOwnProperty(key) && isObject(source[key])) {
        if (!target[key]) {
          Object.assign(target, { [key]: {} })
        }
        mergeDeep(target[key], source[key])
      } else {
        Object.assign(target, { [key]: source[key] })
      }
    }
  }

  return mergeDeep(target, ...sources)
}