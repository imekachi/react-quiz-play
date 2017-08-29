/**
 * Add value to set without changing original one, also returning new Set
 * @param   {Set} originalSet
 * @param   {*} addingValue
 *
 * @return {Set}
 */
export function immutateSetAdd(originalSet, addingValue) {
  return new Set([...originalSet, addingValue])
}

export function immutateSetDelete(originalSet, deletingValue) {
  return new Set([...originalSet].filter(value => value !== deletingValue))
}