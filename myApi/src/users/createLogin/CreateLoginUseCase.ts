import { AppError } from '@shared/errors/AppError'
import { User } from '@users/entities/user'
import jwtconfig from '@config/auth'
import { IUsersRepository } from '@users/repositories/IUsersRepository'
import { inject, injectable } from 'tsyringe'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

export type CreateLoginDTO = {
  email: string
  password: string
}

type IResponse = {
  user: User
  token: string
}

@injectable()
export class CreateLoginUseCase {
  constructor(
    @inject('UsersRepository') private usersRepository: IUsersRepository,
  ) {}

  async execute({ email, password }: CreateLoginDTO): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email)
    if (!user) {
      throw new AppError('Incorret email/password combination', 401)
    }
    const passwordConfirmed = await compare(password, user.password)
    if (!passwordConfirmed) {
      throw new AppError('Incorret email/password combination', 401)
    }
    const token = sign({}, jwtconfig.jwt.secret, {
      subject: user.id,
      expiresIn: jwtconfig.jwt.expiresIn,
    })
    return { user, token }
  }
}
