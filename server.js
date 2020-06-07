const express = require('express');
const app = express();
const hbs = require('hbs');

const port = process.env.PORT || 3000;

// middleware
app.use(express.static(__dirname + '/public'));
// express hbs
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

require('./hbs/helpers');

app.get('/', (req, res) => {
  // let salida = {
  //   nombre: 'ian',
  //   edad: 31,
  //   url: req.url
  // };
  // // res.write('Hola Mundo');
  // res.send(salida);
  // // res.send ('Hola World')
  res.render('home', {
    nombre: 'Ian',
  });
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.listen(port, () => {
  console.log(`Escuchando Peticiones en el puerto ${port}`);
});