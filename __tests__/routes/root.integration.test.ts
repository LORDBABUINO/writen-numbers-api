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

  it('should write number 0', async () => {
    return request(app)
      .get('/0')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res: Response) => {
        expect(res.body).toHaveProperty('extenso', 'zero')
      })
  })

  it('should write number 1', async () => {
    return request(app)
      .get('/1')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res: Response) => {
        expect(res.body).toHaveProperty('extenso', 'um')
      })
  })
})
