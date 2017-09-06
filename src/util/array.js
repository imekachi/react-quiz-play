/**
 * Generate array of undefined with specific member length
 * good for map, reduce
 *
 * @param   {number} numberOfMember
 * @return  {Array}
 */
export const makeArrayOf = numberOfMember => Array.apply(null, new Array(numberOfMember))