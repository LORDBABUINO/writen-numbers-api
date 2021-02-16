import dictionary from '../Dictionary'

class WriterService {
  translate(number: number) {
    return dictionary[number]
  }
}

export default new WriterService()
