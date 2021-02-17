import { Request, Response } from 'express'

import WriterService from '../services/WriterService'

class WriterController {
  async index({ params: { number } }: Request, res: Response) {
    return res.json({
      extenso: WriterService.translate(Number(number)),
    })
  }
}

export default new WriterController()
