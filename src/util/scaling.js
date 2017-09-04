/**
 * Scale a value that in one context to another context
 *
 * @param   {number} thisValue
 * @param   {number} inThisContext ( this must be > 0 )
 * @param   {number} toThisNewContext
 * @return  {number}
 */
export const scale = (thisValue, inThisContext, toThisNewContext) => {
  return inThisContext ? (thisValue * toThisNewContext / inThisContext) : 0
}