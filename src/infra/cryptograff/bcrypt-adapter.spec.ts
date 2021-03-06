import bcrypt from 'bcrypt'
import { BcryptAdapter } from './bcrypt-adapter.'

jest.mock('bcrypt', () => ({
  async hash (): Promise<string> {
    return await new Promise(resolve => resolve('hash'))
  }
}))

const salt = 12
const makeSut = (): BcryptAdapter => {
  return new BcryptAdapter(salt)
}

const throwError = (): never => {
  throw new Error()
}

describe('Bcrypt Adapter', () => {
  test('Should call bcrypt with correct value', async () => {
    const sut = makeSut()
    const hashSpy = jest.spyOn(bcrypt, 'hash')
    await sut.encrypt('valid_password')
    expect(hashSpy).toHaveBeenCalledWith('valid_password', salt)
  })

  test('Should return a hash success', async () => {
    const sut = makeSut()
    const hashPassword = await sut.encrypt('valid_password')
    expect(hashPassword).toBe('hash')
  })

  test('Should throw if bcrypt thorws', async () => {
    const sut = makeSut()
    jest.spyOn(bcrypt, 'hash').mockImplementationOnce(throwError)
    const promise = sut.encrypt('valid_password')
    await expect(promise).rejects.toThrow()
  })
})
