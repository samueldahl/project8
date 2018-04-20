const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');

let app = express();
var jsonParser = bodyParser.json()

app.set('view engine', 'Pug');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));

app.get('/', function (req, res) {
  //Do something here with the file system that allows pug to access a JSON object I think?
  var obj = JSON.parse(fs.readFileSync('data.json', 'utf8'));
  res.render('index', {data: obj});
  console.log('Index page request fulfilled');
})
app.get('/edituser', function (req, res) {
  res.render('editUser');
  res.send('script.js');
  console.log('Edit user page request fufilled');
})
app.get('/createuser', function (req, res) {
  res.render('createUser');
  console.log('Create User page request fufilled');
})



app.post('/usertarget', function(req, res) {
  var obj = JSON.parse(fs.readFileSync('data.json', 'utf8'));
  let newBoi = {
    name:req.body.name,
    id:req.body.id,
    email:req.body.email,
    age:req.body.age
  }
  console.log(newBoi);
  obj.push(req.body);
  fs.writeFile('data.json', JSON.stringify(obj));
  console.log('Create post');
  res.redirect('/');
})
app.post('/deleteuser', function(req, res) {
  console.log('delete user attempted');
  var konsole = {
    laug: console.log
  };
  //Just for you, Jason Faga!
  konsole.laug(req.body);
  /*res.header('Content-Type', 'application/json');
  res.send(JSON.stringify({
    success: true
  }));*/
  var obj = JSON.parse(fs.readFileSync('data.json', 'utf8'));
  var indexOf;
  for (var i = 0; i < obj.length; i++) {
   if (obj[i].id == req.body.user) {
     console.log('this is running and werking and doug can go to sleep');
     obj.splice(i,1);
     
   } else{
     console.log('doug');
   }
 }

  fs.writeFile('data.json', JSON.stringify(obj), function (err) {
    res.json({
      success: err ? false : true
    });
  });
})
app.post('/edituser', function(req, res) {
  console.log('Edit post');
  res.redirect('/');
})


var port = 3000;

app.listen(port);

console.log('listening on port ' + port);
