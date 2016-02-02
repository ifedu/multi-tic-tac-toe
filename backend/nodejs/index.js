'use strict'

const fs = require('fs')
const http = require('http')

const serveStatic = (name, callback) => {
    fs.readFile(`../../_deploy/${name}`, (err, data) => {
        if (err) {
            return callback(err)
        }

        callback(err, data)
    })
}

const server = http.createServer((req, res) => {
    // URL
    let reqUrl = req.url

    if (req.url === '/') {
        reqUrl = 'index.html'
    }

    // TYPES
    const type = req.url.split('/')

    if (type[1] === 'assets') {
        res.writeHead(200, {'Content-Type': 'image/png'})

        serveStatic(reqUrl, (err, content) => res.end(content, 'binary'))
    }

    if (type[1] === 'css') {
        res.writeHead(200, {'Content-Type': 'text/css'})
    }

    if (type[1] === 'api') {
        req.on('data', function (data) {
            res.write(`El usuario pulso: ${data}`)
        })

        res.writeHead(200, {'Content-Type': 'text/html'})
    }

    serveStatic(reqUrl, (err, content) => res.end(content))
})

server.listen(3000, function () {
    console.log('Puerto 3000')
})