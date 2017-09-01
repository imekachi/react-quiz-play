/**
 * Scale a value that in one context to another context
 * @param   {Number} thisValue
 * @param   {Number} inThisContext ( this must be > 0 )
 * @param   {Number} toThisNewContext
 *
 * @return  {Number}
 */
export function scale(thisValue, inThisContext, toThisNewContext) {
  return inThisContext ? (thisValue * toThisNewContext / inThisContext) : 0
}