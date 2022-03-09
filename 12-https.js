const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('Welcome Bitches to Home Page')
    }
    if (req.url === '/about') {
        res.end('Here is our short history')
    }
    res.end(`
    <h1>Ooops!</h1>
    <p> We cannot find yo page loser </p>
    <a href="/">back home </a>
    `)
})

server.listen(3000)