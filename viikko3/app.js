const express = require('express')
const app = express()
const port = 3000
const morgan = require('morgan')
const queryValidator = require('./query_validator')
const errorHandler = require('./error_handler')
app.use(morgan('dev'));
app.use(errorHandler)
const fetch = require('node-fetch')
const url = " https://www.ilmatieteenlaitos.fi/observation-data?station=101004"
//harjoitus, tämä virheenkäsittelijä esimerkki toimi
// app.get('/polku', (req, res, next) => {
// // …
// // tapahtuu virhe
//     const err = new Error(`Invalid action`);
//     err.statusCode = 400;
//     next(err);
// })


app.get('/weather', queryValidator , (req, res, next) => {
    console.log("moi")
    fetch(url)
        .then(res => {
        console.log(res.status, res.statusText)
        //res.send('weather')
        //console.log(req.query)
            return res.json()
    })
        .then(data => console.log(data))
        .catch(err => console.log(err))


})


app.listen(port, () =>
    console.log(`Weather app listening on port ${port}!`))
