require('dotenv').config();
const express = require('express')
const hbs = require('hbs');


const app = express();
const port = process.env.PORT;

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('home', {
    name: 'Antonio Cortes',
    title: 'Node',
  });
})

app.get('/generic', function (req, res) {
  res.render('generic', {
    name: 'Antonio Cortes',
    title: 'Node',
  });
})

app.get('/elements', function (req, res) {
  res.render('elements', {
    name: 'Antonio Cortes',
    title: 'Node',
  });
})

//For any other request. *
// app.get('*', function (req, res) {
//   res.sendFile(__dirname + '/public/404.html');
// })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});