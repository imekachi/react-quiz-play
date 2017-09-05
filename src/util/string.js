export const combineStrWith = (combineWith = ' ', filterFn = () => true, ...strings) => {
  return strings.filter(filterFn).join(combineWith)
}

export const classNames = (...classNames) => {
  return combineStrWith(
    ' ', // combine with space
    item => !!item, // remove all falsy values
    ...classNames
  )
}