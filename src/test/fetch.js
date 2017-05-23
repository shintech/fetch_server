import chai from 'chai'
import chaiHttp from 'chai-http'
import server from '../server'

chai.use(chaiHttp)

const expect = chai.expect

describe('Fetch Server...', function () {
  it('should fetch all models from remote server at /api/fetch GET', function (done) {
    chai.request(server)
    .get('/api/fetch')
    .end(function (err, res) {
      expect(err).to.be.null // eslint-disable-line
      expect(res).to.have.status(200)
      expect(res.body).to.have.status('success')
      expect(res.body.payload[0]).to.have.property('id')
      done()
    })
  })

  it('should create a model on remote server at /api/create POST', function (done) {
    const object = {
      name: 'testName',
      attribute: 1
    }
    chai.request(server)
    .post('/api/fetch')
    .send(object)
    .end(function (err, res) {
      expect(err).to.be.null // eslint-disable-line
      expect(res).to.have.status(200)
      done()
    })
  })
})
