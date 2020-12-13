import request from 'supertest'

import Connection from '../../../src/database/connection'
import app from '../../../src/start/app'

describe('/users', () => {
  beforeAll(async () => {
    await Connection.create()
  })
  afterAll(async () => {
    await Connection.close()
  })
  beforeEach(async () => {
    await Connection.clear()
  })
  it('Should return a http 201 (route: POST )', async () => {
    const res = await request(app).post('/users').send({
      fullname: 'john test',
      email: 'john@test.com',
      password: 'passwordTest',
    })
    expect(res.status).toEqual(201)
  })
})
