var express = require('express');
var bodyParser = require('query-parser')
var add = require('./add');
var service = express();
service.use(bodyParser)
service.use('/add', function (req, res) {
  console.log("req", req.query.a, req.query.b)
  res.json({
    sum: add.addSync(req.query.a, req.query.b)
  });
})
service.listen(9999, function () {
  console.log("Server is litening at port 9999...")
})