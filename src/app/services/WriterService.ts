import dictionary from '../Dictionary'

class WriterService {
  translate(number: number): string {
    if (number < 0) return `menos ${this.translate(number * -1)}`
    if (Object.keys(dictionary).includes(String(number)))
      return dictionary[number]
    return this.writeMultipleWordNumber(
      number,
      this.findClosest(number, Object.keys(dictionary).slice(20).map(Number))
    )
  }

  private writeMultipleWordNumber(
    number: number,
    closestNumber: number
  ): string {
    return `${
      number >= 2000 ? `${this.translate(Math.floor(number / 1000))} ` : ''
    }${closestNumber === 100 ? 'cento' : this.translate(closestNumber)}${
      number % 1000 ? ` e ${this.translate(number % closestNumber)}` : ''
    }`
  }

  private findClosest(number: number, list: number[]): number {
    return (function binarySearch(low = 0, high = list.length - 1): number {
      const mid = Math.floor((high + low) / 2)
      if (high === low) return list[low]
      if (number < list[mid]) return binarySearch(low, mid)
      if (number > list[mid] && number < list[mid + 1]) return list[mid]
      return binarySearch(mid + 1, high)
    })()
  }
}

export default new WriterService()
