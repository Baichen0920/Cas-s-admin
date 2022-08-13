// const auth = require('./auth')
const units = require('./units')

module.exports = (app) => {
    app.use('/api/units', units)
}