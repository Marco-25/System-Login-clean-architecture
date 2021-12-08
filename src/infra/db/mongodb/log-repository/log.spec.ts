import { Collection } from 'mongodb'
import { ILogErrorRepository } from '../../../../data/protocols/log-error-repository'
import { MongoHelper } from '../helpers/mongo-helper'
import { LogMongoRepository } from './log'

const makeSut = (): ILogErrorRepository => new LogMongoRepository()

describe('Log Mongo Repository', () => {
  let errorColletion: Collection
  beforeAll(async (): Promise<void> => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async (): Promise<void> => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    errorColletion = await MongoHelper.getCollection('errors')
    await errorColletion.deleteMany({})
  })

  test('Should create an error log on success', async () => {
    const sut = makeSut()
    await sut.logError('any_error')
    const count = await errorColletion.countDocuments()
    expect(count).toBe(1)
  })
})
