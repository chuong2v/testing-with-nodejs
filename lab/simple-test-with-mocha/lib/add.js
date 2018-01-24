exports.addSync = function (a, b) {
  return a + b;
}

exports.addAsync = function (a, b) {
  return Promise.resolve().then(function () {
    return a + b;
  })
}