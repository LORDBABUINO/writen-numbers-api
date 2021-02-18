import { Request, Response } from 'express'

import WriterService from '../services/WriterService'

class WriterController {
  async index({ params: { number } }: Request, res: Response) {
    const intNumber = Number(number)
    if (Number.isNaN(intNumber))
      return res.status(400).json({ message: "it's not a number" })
    if (Number.isInteger(intNumber) && Math.abs(intNumber) < 1000000)
      return res.json({ extenso: WriterService.translate(intNumber) })
    if (Number.isInteger(intNumber))
      return res.status(400).json({ message: 'number out of range' })
    return res.status(400).json({ message: 'the number should be an integer' })
  }
}

export default new WriterController()
