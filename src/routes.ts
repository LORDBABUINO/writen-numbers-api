import { Router } from 'express'

import WriterController from './app/controllers/WriterController'

const router = Router()

router.get('/favicon.ico', (_, res) => res.status(204).end())
router.get('/:number', WriterController.index)

export default router
