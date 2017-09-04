/**
 * isFunction
 * check if it is a function
 * best performance according to https://jsperf.com/alternative-isfunction-implementations
 *
 * @param   {function} fn
 * @return  {boolean}
 */
export const isFunction = (fn) => !!(fn && fn.constructor && fn.call && fn.apply)