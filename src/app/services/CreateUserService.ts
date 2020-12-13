import { getCustomRepository } from 'typeorm'

import User from '../models/User'
import UserRepository from '../repositories/UserRepository'

interface Request {
  fullname: string
  email: string
  password: string
}

class CreateUserService {
  public async execute({ fullname, email, password }: Request): Promise<User> {
    const userRepository = getCustomRepository(UserRepository)
    const user = userRepository.create({
      fullname,
      email,
      password,
    })
    await userRepository.save(user)
    return user
  }
}

export default CreateUserService
