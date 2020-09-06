const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'})  //muestra en el navegador
    let salida = {
        nombre: 'Maria',
        edad: 22,
        url: req.url
    }


    res.write(JSON.stringify(salida))
    res.end()
})

.listen(8000);

console.log('Escuchando el puerto 8000');

//Para facilitar este codigo vamos a usar una lib "express"