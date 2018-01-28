var add = require('./../../lib/add');
var expect = require('chai').expect;
var request = require('superagent');

before(function (done) {
  request.get('localhost:12018')
    .then(function (res) {
      expect(res.status).equal(200)
      done()
    })
    .catch(done)
})

describe("Add functions", function (done) {
  it("Case 1: should return exactly sum of 2 integer numbers", function (done) {
    request
      .post('localhost:12018/add')
      .set('content-type', 'application/json')
      .send({
        a: 1,
        b: 2
      })
      .then(function (res) {
        expect(res.status).equal(200);
        expect(res.body.sum).equal(3);
        done();
      })
      .catch(done);
  })

  it.skip("Case 2: should return correctly sum of 2 float numbers", function (done) {
    request
      .post('localhost:12018/add')
      .set('content-type', 'application/json')
      .send({
        a: 3.5,
        b: 2.7
      })
      .then(function (res) {
        expect(res.status).equal(200);
        expect(res.body.sum).equal(6.2);
        done();
      })
      .catch(done);
  })
})