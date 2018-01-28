var addFns = require('./add')
var express = require('express')
var bodyParser = require('body-parser')
var app = express()
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('test')
})

app.post('/add', function (req, res) {
  var sum = addFns.addSync(req.body.a, req.body.b);
  res.status(200).send({
    sum: sum
  });
})

app.listen(12018, function () {
  console.log('Server is listening at port 12018')
})