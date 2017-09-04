/**
 * Add value to set without changing original one, also returning new Set
 *
 * @param   {Set} originalSet
 * @param   {*} addingValue
 * @return  {Set}
 */
export const immutateSetAdd = (originalSet, addingValue) => new Set([...originalSet, addingValue])

export const immutateSetDelete = (originalSet, deletingValue) => {
  return new Set([...originalSet].filter(value => value !== deletingValue))
}