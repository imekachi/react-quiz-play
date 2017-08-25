/**
 * Generate array of undefined with specific member length
 * good for map, reduce
 *
 * @param   {Number} numberOfMember
 * @return  {Array}
 */
export function makeArrayOf(numberOfMember) {
  return Array.apply(null, new Array(numberOfMember))
}