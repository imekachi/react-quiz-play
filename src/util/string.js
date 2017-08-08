export function combineStrWith(settings = {}, ...strs) {
  const { combineWith, filterFn } = settings
  return strs.filter(filterFn).join(combineWith)
}

export function combineClassNames(...classNames) {
  return combineStrWith({
      combineWith: ' ',
      filterFn   : item => !!item, // remove all falsy values
    },
    ...classNames
  )
}