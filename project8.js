const express = require('express');
const path = require('path');
const bodyParser = reuqire('bodyParser');

let app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index',{
    title:'this is a variable title', //could also equal something outside of script.js
    message:'This is my message',
    partial:'are cool!'
  });
});

app.listen(3000);

console.log('listening on port 3000');
