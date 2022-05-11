const dotenv = require('dotenv')
dotenv.config({ path: './config.env' })

const app = require('./app')

// port for server
const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(
        `server running on port ${port}...`
    )
})
