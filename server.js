/* server.js - Express server*/
const log = console.log
'use strict';

const express = require('express')
const app = express();

const path = require('path');

app.use(express.static(path.join(__dirname, '/pub')))


const port = process.env.PORT || 5000
app.listen(port, () => {
    log(`Listening on port ${port}...`)
})

