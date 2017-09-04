export const iF = (condition, then, ifNotThen = '') => {
  return condition ? then : ifNotThen
}