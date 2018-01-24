var add = require('./../../lib/add');
var assert = require('assert');

describe("Add functions", function (done) {
  describe("#addSync()", function (done) {
    it("Case 1: should return exactly sum of 2 integer numbers", function (done) {
      var sum = add.addSync(1, 2);
      assert.equal(sum, 3);
      done();
    })

    it("Case 2: should return correctly sum of 2 float numbers", function (done) {
      var sum = add.addSync(3.5, 2.7);
      assert.equal(sum, 6.2);
      done();
    })
  })

  describe("#addAsync()", function () {
    it("Case 1: should return correctly sum of 2 integer numbers", function (done) {
      add.addAsync(1, 2).then(function (sum) {
        assert.equal(sum, 3);
        done();
      }).catch(done);
    })

    it("Case 2: should return correctly sum of 2 float numbers", function (done) {
      add.addAsync(3.5, 2.7).then(function (sum) {
        assert.equal(sum, 6.2);
        done();
      }).catch(done);
    })
  })
})