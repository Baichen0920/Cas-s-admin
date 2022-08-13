var express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors')

var app = express()

app.use(cors())

app.use(require("morgan")("dev"))
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())


