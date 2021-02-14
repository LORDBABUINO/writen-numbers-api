import { Request, Response } from 'express'

import WriterService from '../services/WriterService'

class WriterController {
  async index(_: Request, res: Response) {
    return res.json({ extenso: WriterService.translate() })
  }
}

export default new WriterController()
