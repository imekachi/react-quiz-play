/**
 * isFunction
 * check if it is a function
 * best performance according to https://jsperf.com/alternative-isfunction-implementations
 *
 * @param   {Function} fn
 *
 * @return  {Boolean}
 */
export function isFunction(fn) {
  return !!(fn && fn.constructor && fn.call && fn.apply)
}