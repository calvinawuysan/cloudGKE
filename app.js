'use strict'

const express = require('express')

const PORT = 8000
const HOST = '0.0.0.0'

const app = express()
app.get('/', (req, res) => {
    res.send('Calvina Wuysan')
    res.send('51018003')
    res.send('Sitem Informasi 2018')
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
