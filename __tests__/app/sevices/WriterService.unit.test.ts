import WriterService from '../../../src/app/services/WriterService'
import testCaseList from '../TestCaseList'

describe('WriterService', () => {
  Object.keys(testCaseList).forEach((key) => {
    it(`Should should write number ${key}`, async () => {
      expect(WriterService.translate(Number(key))).toBe(testCaseList[key])
    })
  })
})
