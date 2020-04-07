const express = require('express')
const app = express()
const port = 3000


// app.get('/', (req, res) =>
//     res.send('Hello World!'))

app.use(express.static('public'))

app.get('/api/exercise', (req, res) => {

    console.log(req.query)
    res.send(req.query)
    // for (const key in req.query) {
    //     console.log(key, req.query[key])
    //
    // }
    // res.send([key,req.query[key]])
    res.status(200);
})

app.listen(port, () =>
    console.log(`Example app listening on
port ${port}!`))
