const express = require('express')
const app = express()
const port = 3000
app.use(express.json())
const cors = require('cors')

app.set('view engine', 'pug')
app.set('views', 'public')
app.use(express.urlencoded({extended: true}))
app.use(cors())


// app.get('/', (req, res) =>
//     res.send('Hello World!'))
app.use(express.static('public'))

app.get('/api/exercise', (req, res) => {
    console.log(req.query)
    res.send(req.query)
    res.status(200);
})

app.post('/api/exercise', (req, res) => {
    res.render('list', {items: req.body})
    res.status(200);
})

app.post('/api/login', (req, res) => {
    const username = req.body.user
    const password = req.body.pwd

    if(username === '' || password === '') {
        res.sendStatus(400);
    }
    else if (username === 'mark' && password === 'giraffe') {
        res.json({user: username}).status(200)
    }
    else {
        res.sendStatus(403)
    }
})

app.get('/api', (req, res) => {
    res.json({msg: "Hello, world!"}).status(200)
})

app.get('/hello', (req, res) => {
    res.render('hello')
    res.status(200);
})

app.listen(port, () =>
    console.log(`Example app listening on port ${port}!`))
