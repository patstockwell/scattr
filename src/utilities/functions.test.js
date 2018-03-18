import { containsString, addToSet, removeFromSet } from './functions'

/* global describe:true it:true expect:true */

const emptyArray = []
const stringsArray = ['firstString', 'another', 'howdy-pardner', '##%.,a a 4']
const myObj = { key: 'value' }

describe('the contains function', () => {
  describe('when the array is empty', () => {
    it('should return false', () => {
      expect(containsString(emptyArray, 'something')).toEqual(false)
    })
  })

  describe('when the first argument is not an array', () => {
    it('should return false when the 1st argument is a string', () => {
      expect(containsString('not an array', 'item')).toEqual(false)
    })
    it('should return false when the 1st argument is an integer', () => {
      expect(containsString(234, 'item')).toEqual(false)
    })
    it('should return false when the 1st argument is an object', () => {
      expect(containsString({ key: 'value' }, 'value')).toEqual(false)
    })
    it('should return false when the 1st argument is a boolean', () => {
      expect(containsString(true, 'value')).toEqual(false)
    })
  })

  describe('when the array has length', () => {
    it('can find a matching string', () => {
      const matchingString = 'I am a great big hippopotamus'
      const hasMatching = [...stringsArray, matchingString]
      expect(containsString(hasMatching, matchingString)).toEqual(true)
    })
    it('doesn\'t match if the item is not in the array', () => {
      const nonMatchingString = 'A race against time!'
      expect(containsString(stringsArray, nonMatchingString)).toEqual(false)
    })
  })

  describe('when the second argument is missing', () => {
    it('should return false', () => {
      expect(containsString(stringsArray)).toEqual(false)
    })
  })
})

describe('the addToSet function', () => {
  describe('when the first argument is not an array', () => {
    it('should return the first argument when it\'s an integer', () => {
      expect(addToSet(1234, 2345)).toEqual(1234)
    })
    it('should return the first argument when it\'s an object', () => {
      expect(addToSet(myObj, 2345)).toEqual(myObj)
    })
  })

  describe('when the second argument is missing', () => {
    it('should return the first argument', () => {
      const arr = ['one']
      expect(addToSet(arr)).toEqual(arr)
    })
  })

  describe('when the arguments are valid', () => {
    describe('when the item is not in the array', () => {
      it('should return a new array containing the new object', () => {
        const oldArr = ['one']
        const item = 'two'
        const newArr = ['one', 'two']
        expect(addToSet(oldArr, item)).toEqual(newArr)
      })
    })

    describe('when the item is in the array', () => {
      it('should return the orginal array', () => {
        const oldArr = ['luke', 'vadar', 'yoda', 'rei']
        const item = 'luke'
        expect(addToSet(oldArr, item)).toEqual(oldArr)
      })
    })
  })
})

describe('the removeFromSet function', () => {
  describe('when the first argument is not array', () => {
    it('should return the first argument if it is an integer', () => {
      expect(removeFromSet(456, 122)).toEqual(456)
    })
    it('should return the first argument if it is an object', () => {
      expect(removeFromSet(myObj, 122)).toEqual(myObj)
    })
    it('should return the first argument if it is a boolean', () => {
      expect(removeFromSet(true, 122)).toEqual(true)
    })
  })

  describe('when the second argument is missing', () => {
    it('should return the same array', () => {
      expect(removeFromSet(stringsArray)).toEqual(stringsArray)
    })
  })

  describe('when the arguments are valid', () => {
    describe('when the item is in the array', () => {
      it('should return a new array without that item', () => {
        const oldArr = ['Homer', 'Marge', 'Bart', 'Lisa', 'Maggie']
        const newArr = ['Homer', 'Marge', 'Bart', 'Lisa']
        expect(removeFromSet(oldArr, 'Maggie')).toEqual(newArr)
      })
    })

    describe('when the item is not in the array', () => {
      it('should return the array untouched', () => {
        const oldArr = ['vim', 'emacs', 'vscode', 'sublime', 'atom', 'pico']
        expect(removeFromSet(oldArr, 'textmate')).toEqual(oldArr)
      })
    })
  })
})
