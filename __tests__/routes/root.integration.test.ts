import request, { Response } from 'supertest'

import { Dictionary } from '../../src/app/Dictionary'
import app from '../../src/start/app'

describe('GET /', () => {
  it('should connect', async () => {
    return request(app)
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res: Response) => {
        expect(res.body).toHaveProperty('message', 'Hello world!')
      })
  })

  it('should deny favicon.ico request', async () => {
    return request(app).get('/favicon.ico').expect(204)
  })

  const getDictionary = (): Dictionary => ({
    0: 'zero',
    1: 'um',
  })

  Object.keys(getDictionary()).forEach((key) => {
    it(`should write number ${key}`, async () => {
      return request(app)
        .get(`/${key}`)
        .expect('Content-Type', /json/)
        .expect(200)
        .then((res: Response) => {
          expect(res.body).toHaveProperty('extenso', getDictionary()[key])
        })
    })
  })
})
