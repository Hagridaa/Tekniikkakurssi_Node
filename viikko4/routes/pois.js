const express = require('express')
const router = express.Router()
const {getPoi, createPoi, setPoi, deletePoi} = require("../db");
const queryValidator = require("../query_validator");

// a middleware function with no mount path. This code is executed for every request to the router
router.use((req, res, next) => {
    console.log('Time:', Date.now())
    next()
})

// get all content
// response type    application/json
// response code    200: OK
// if not found     404: Not found
router.get('/', (req, res, next) => {
    const allPois = getPoi()
    res.send(allPois).status(200)
})

// get by id
// response type    application/json
// example id: 50e31360-0521-11ea-acba-e389d9b4cbaa
// response code    200: OK
// if not found     404: Not found
router.get('/:id', (req, res, next) => {
    console.log(req.params.id)
    const onePois = getPoi(req.params.id)
    if (onePois === undefined) {
        res.status(404).send("ei löydy")
    } else {
        res.status(200).send(onePois)
    }
})

// Add new pois
// content type     application/json
// response type    application/json
// response code    201: OK
// if not found     400: Poi information missing
router.post('/', queryValidator, (req, res, next) => {
    const json = req.body
    console.log(`input: ${JSON.stringify(json)}`)
    if (Object.keys(req.body).length === 0) {
        res.status(400).send("Luonti ei onnistunut")
    } else {
        console.log("Luodaan uusi poi")
        const poi = createPoi(json)
        res.status(201).send(poi)
    }
})

// Update existing pois
// content type     application/json
// response type    application/json
// example id: 50e31360-0521-11ea-acba-e389d9b4cbaa
//  200: Päivitys onnistui
// o Vastauksen runko: Päivitetty POI
//  201: Uusi kohde luotu id:llä
// o Vastauksen runko: POI
//  400: POI-tiedot virheelliset
router.put('/:id', queryValidator, (req, res, next) => {
    const id = req.params.id
    const json = req.body
    console.log(JSON.stringify(json))
    if (Object.keys(json).length === 0) {
        res.status(400).send("Poi tiedot virheelliset")
    } else {
        if (getPoi(id) === undefined) {
            console.log("Didn't found id, created new value")
            const poi = setPoi(id, json)
            res.status(201).send(poi)
        } else {
            console.log("Found id, updating value")
            const poi = setPoi(id, json)
            res.status(200).send(poi)
        }
    }
})

// delete one pois
// parameter: id of the pois
// example id: 50e31360-0521-11ea-acba-e389d9b4cbaa
router.delete('/:id', queryValidator, (req, res, next) => {
    console.log(req.params.id)
    const id = req.params.id
    const poiRemoved = deletePoi(id)
    if (poiRemoved) {
        console.log("found and deleted")
        res.status(204).send("poi deleted")
    } else {
        console.log("not found")
        res.status(404).send("poi not found")
    }
})

module.exports = router;
