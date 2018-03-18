export const containsString = (array, item) => {
  for (let x = 0; x < array.length; x += 1) {
    if (array[x] === item) {
      return true
    }
  }
  return false
}

export const addToSet = (array, item) => {
  if (
    containsString(array, item) ||
    !Array.isArray(array) ||
    item === undefined ||
    item === null
  ) {
    return array
  }
  return [...array, item]
}
