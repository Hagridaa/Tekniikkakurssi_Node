const express = require('express')
const app = express()
const port = 3000
const path = require('path')
app.use(express.json())

app.set('view engine', 'pug')
app.set('views', 'public')
app.use(express.urlencoded({extended: true}))


// app.get('/', (req, res) =>
//     res.send('Hello World!'))
app.use(express.static('public'))

app.get('/api/exercise', (req, res) => {
    console.log(req.query)
    res.send(req.query)
    res.status(200);
})

app.post('/api/exercise', (req, res) => res.render('list', {items: req.body}).status(200))

app.listen(port, () =>
    console.log(`Example app listening on port ${port}!`))
