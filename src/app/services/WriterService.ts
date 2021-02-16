import dictionary from '../Dictionary'

class WriterService {
  translate(number: number): string {
    if (number < 0) return `${this.translate(number * -1)} negativo`
    return dictionary[number]
  }
}

export default new WriterService()
