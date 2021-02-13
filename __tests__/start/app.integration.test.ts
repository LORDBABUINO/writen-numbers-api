import request, { Response } from 'supertest'

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
})
