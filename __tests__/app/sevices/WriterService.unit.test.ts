import WriterService from '../../../src/app/services/WriterService'

describe('WriterService', () => {
  interface Dictionary {
    [number: string]: string
  }

  const getDictionary = (): Dictionary => ({
    0: 'zero',
    1: 'um',
  })

  Object.keys(getDictionary()).forEach((key) => {
    it(`Should should write number ${key}`, async () => {
      expect(WriterService.translate(Number(key))).toBe(getDictionary()[key])
    })
  })
})
