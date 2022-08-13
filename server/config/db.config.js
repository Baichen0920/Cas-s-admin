'use strict'

// const { Client } = require('pg')

// const db = new Client({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'seafood',
//   password: 'nightfury',
//   port: 5432,
// })

// module.exports = db

module.exports = {
  HOST: 'localhost',
  USER: 'postgres',
  DATABASE: 'seafood',
  PASSWORD: 'nightfury',
  port: 5432,
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  }
}
