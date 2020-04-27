const express = require('express')
const morgan = require('morgan')
const errorHandler = require('./error_handler')
const poisRouter = require('./routes/pois')
const authRouter = require('./routes/auth')
const router = express.Router()
const app = express()
app.use(morgan('combined'))
const port = 3000
app.use(express.json())
app.use(express.urlencoded({extend: true}));
app.use(errorHandler)


// mount the router on the pois
app.use('/api/v1/pois', poisRouter)
app.use('/auth', authRouter)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
