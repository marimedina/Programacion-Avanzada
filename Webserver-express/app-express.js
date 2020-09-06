const express = require('express');
const app = express();

app.get('/', (req, res) => {
    let salida = {
        nombre: 'Maria',
        edad: 22,
        url: req.url
    };

    res.send(salida)
})