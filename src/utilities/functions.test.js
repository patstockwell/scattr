import { containsString, addToSet } from './functions'

/* global describe:true it:true expect:true */

const emptyArray = []
const stringsArray = ['firstString', 'another', 'howdy-pardner', '##%.,a a 4']

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
      const myObj = { key: 'value' }
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
