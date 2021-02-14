import { Router } from 'express'

const router = Router()

router.get('/', (_, res) => {
  res.json({ message: 'Hello world!' })
})

router.get('/0', (_, res) => {
  res.json({ extenso: 'zero' })
})

export default router
