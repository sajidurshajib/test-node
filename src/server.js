const dotenv = require('dotenv')
dotenv.config({ path: './config.env' })
const mongoose = require('mongoose')
const app = require('./app')

// mongodb connection
mongoose
    .connect(process.env.DATABASE_LOCAL, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
    .then(() =>
        console.log('DB connection successfull!')
    )

// port for server
const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(
        `server running on port ${port}...`
    )
})
