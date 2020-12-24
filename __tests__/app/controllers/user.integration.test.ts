import request from 'supertest'
import { getCustomRepository } from 'typeorm'

import User from '../../../src/app/models/User'
import UserRepository from '../../../src/app/repositories/UserRepository'
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
  afterEach(async () => {
    await getCustomRepository(UserRepository).clear()
  })
  it('Should save User on database (route: POST )', async () => {
    const mock = {
      fullname: 'john test',
      email: 'john@test.com',
      password: 'passwordTest',
    }
    const res = await request(app).post('/users').send(mock)
    const data = await getCustomRepository(UserRepository).find()
    expect(data.length).toEqual(1)
    expect(data[0]).toEqual(expect.any(User))
    expect(data[0]).toEqual(expect.objectContaining(mock))
    expect(res.status).toEqual(201)
  })
})
