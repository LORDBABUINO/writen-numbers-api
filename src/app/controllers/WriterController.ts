import { Request, Response } from 'express'

import WriterService from '../services/WriterService'

class WriterController {
  async index(req: Request, res: Response) {
    return res.json({
      extenso: WriterService.translate(Number(req.params.number)),
    })
  }
}

export default new WriterController()
