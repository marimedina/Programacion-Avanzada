const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'})

    res.write(JSON.stringify(salida))
    res.end()
})

.listen(8000)

console.log('Escuchando al puerto');