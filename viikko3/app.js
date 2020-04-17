const express = require('express')
const app = express()
const port = 3000
const morgan = require('morgan')

app.use(morgan('combined'));
app.get('/weather', (reg, res) => {
    res.send('weather')
})




app.listen(port, () =>
    console.log(`Weather app listening on port ${port}!`))
