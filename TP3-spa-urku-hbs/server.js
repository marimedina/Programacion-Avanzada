const express = require('express');
const app = express();

const port = process.env.PORT || 8000

const hbs = require('hbs');

app.use(express.static(__dirname + '/views'));

hbs.registerPartials(__dirname + '/views/Parciales')
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(port);
console.log(`Server escuchando en http://localhost:${port}/`);