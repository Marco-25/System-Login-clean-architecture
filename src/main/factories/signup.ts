import { SignUpController } from '../../presentation/controllers/signup/SignUpController'
import { EmailValidatorAdapter } from '../../utils/email-validator-adapter'
import { DbAddAccount } from '../../data/usecases/add-account/db-add-account'
import { BcryptAdapter } from '../../infra/cryptograff/bcrypt-adapter.'
import { AccountMongoRepository } from '../../infra/db/mongodb/account-repository/account'
import { IController } from '../../presentation/protocols'
import { LogControllerDecorator } from '../decorators/log'
import { LogMongoRepository } from '../../infra/db/mongodb/log-repository/log'

export const makeSignUpController = (): IController => {
  const salt = 12
  const encrypter = new BcryptAdapter(salt)
  const accountMongoRepository = new AccountMongoRepository()
  const account = new DbAddAccount(encrypter, accountMongoRepository)
  const emailValidator = new EmailValidatorAdapter()
  const signupController = new SignUpController(emailValidator, account)
  const logMongoRepository = new LogMongoRepository()
  return new LogControllerDecorator(signupController, logMongoRepository)
}
