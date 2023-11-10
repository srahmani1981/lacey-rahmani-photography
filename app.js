const express = require('express');
const app = express();
const port = 3030;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', { title: 'Lacey Rahmani Photography' });
});


app.get('/portfolio', (req, res) => {
  res.render('portfolio', { title: 'Portfolio - Lacey Rahmani Photography' });
});

app.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact - Lacey Rahmani Photography' });
});

app.get('/clientLogin', (req, res) => {
  res.render('clientLogin', { title: 'Client Login - Lacey Rahmani Photography' });
});



app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
