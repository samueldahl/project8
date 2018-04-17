const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');

let app = express();

app.set('views', './views');
app.set('view engine', 'Pug');

app.get('/', function (req, res) {
  res.render('index');
})
app.get('/edituser', function (req, res) {
  res.render('editUser');
})
app.get('/createuser', function (req, res) {
  res.render('createUser');
})
app.post('/', function(req, res) {
  console.log('Yo, I got a post request. Behringer is great.');
})

app.listen(3000);

console.log('listening on port 3000');
