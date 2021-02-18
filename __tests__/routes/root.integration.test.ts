import request, { Response } from 'supertest'

import { Dictionary } from '../../src/app/Dictionary'
import app from '../../src/start/app'

describe('GET /', () => {
  it('should reject requests without params', async () => {
    return request(app).get('/').expect(404)
  })

  it('should deny favicon.ico request', async () => {
    return request(app).get('/favicon.ico').expect(204)
  })

  it('should throw error on string requests', async () => {
    return request(app)
      .get('/test')
      .expect('Content-Type', /json/)
      .expect(400)
      .then((res: Response) => {
        expect(res.body).toHaveProperty('message', "it's not a number")
      })
  })

  it("should throw 'out of range' error on huge numbers", async () => {
    return request(app)
      .get('/1000000')
      .expect('Content-Type', /json/)
      .expect(400)
      .then((res: Response) => {
        expect(res.body).toHaveProperty('message', 'number out of range')
      })
  })

  it("should throw 'out of range' error on small numbers", async () => {
    return request(app)
      .get('/-1000000')
      .expect('Content-Type', /json/)
      .expect(400)
      .then((res: Response) => {
        expect(res.body).toHaveProperty('message', 'number out of range')
      })
  })

  it('should throw error on not integer numbers', async () => {
    return request(app)
      .get('/12.4')
      .expect('Content-Type', /json/)
      .expect(400)
      .then((res: Response) => {
        expect(res.body).toHaveProperty(
          'message',
          'the number should be an integer'
        )
      })
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
