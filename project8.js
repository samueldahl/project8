const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');

let app = express();

app.set('views', './views');
app.set('view engine', 'Pug');

app.get('/', function (req, res) {
  res.render('index');
  console.log('Index page request fulfilled');
})
app.get('/edituser', function (req, res) {
  res.render('editUser');
  console.log('Edit user page request fufilled');
})
app.get('/createuser', function (req, res) {
  res.render('createUser');
  console.log('Create User page request fufilled');
})
app.post('/', function(req, res) {
  console.log('Yo, I got a post request. Behringer is great.');
})

var port = 3000;

app.listen(port);

console.log('listening on port ' + port);
