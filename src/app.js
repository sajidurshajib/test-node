const express = require('express')
const morgan = require('morgan')

const app = express()
const roleRouters = require('./api/roleRoutes')

// middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}
app.use(express.json())

// root route
app.get('/', (req, res) => {
    res.json({ msg: 'Node blog api.' })
})

// routers middleware
app.use('/api/v1', roleRouters)

module.exports = app
