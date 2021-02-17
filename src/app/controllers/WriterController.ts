import { Request, Response } from 'express'

import WriterService from '../services/WriterService'

class WriterController {
  async index({ params: { number } }: Request, res: Response) {
    if (Number.isNaN(Number(number)))
      return res.status(400).json({ message: "it's not a number" })
    return res.json({
      extenso: WriterService.translate(Number(number)),
    })
  }
}

export default new WriterController()
