import WriterService from '../../../src/app/services/WriterService'

describe('WriterService', () => {
  it('Should should write number 1', async () => {
    expect(WriterService.translate(1)).toBe('um')
  })
})
