class WriterService {
  translate(number: number) {
    if (number === 1) return 'um'
    return 'zero'
  }
}

export default new WriterService()
