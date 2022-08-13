const http = require('http')

const app = require('./app/express')
const db = require('./app/models/sequelize')
const config = require('./config')

db.sequelize
  .sync()
  .then(() => {
    const server = http.createServer(app).listen(config.SERVER_PORT, () => {
      console.log(`Server is running on PORT ${config.SERVER_PORT}`)
    })
  })
  .catch((err) => console.log('Failed to sync db:' + err.message))
