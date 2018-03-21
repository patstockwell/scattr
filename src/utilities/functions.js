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

export const removeFromSet = (array, item) => {
  for (let x = 0; x < array.length; x += 1) {
    if (array[x] === item) {
      return array.slice(0, x).concat(array.slice(x + 1))
    }
  }
  return array
}

export const convertToUrl = text => (
  text
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[-]+/g, '-')
    .replace(/[^\w-]+/g, '')
)
