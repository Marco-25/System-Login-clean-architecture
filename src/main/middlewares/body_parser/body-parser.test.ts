import request from 'supertest'
import app from '../../config/app'

describe('Body-Parser middleware', () => {
  test('Should parser body as json ', async () => {
    app.post('/test_body_parser', (request, response) => {
      response.send(request.body)
    })

    await request(app)
      .post('/test_body_parser')
      .send({ name: 'Marco' })
      .expect({ name: 'Marco' })
  })
})
