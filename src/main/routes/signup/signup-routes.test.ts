import request from 'supertest'
import { MongpHelper } from '../../../infra/db/mongodb/helpers/mongo-helper'
import app from '../../config/app'

describe('SignUp Routes', () => {
  beforeAll(async (): Promise<void> => {
    await MongpHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async (): Promise<void> => {
    await MongpHelper.disconnect()
  })

  beforeEach(async () => {
    const accountColletion = await MongpHelper.getCollection('accounts')
    await accountColletion.deleteMany({})
  })

  test('Should return an account success ', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'Marco',
        email: 'marco@mail.com',
        password: '123',
        passwordConfirmation: '123'
      })
      .expect(200)
  })
})
