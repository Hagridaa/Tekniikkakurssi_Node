const express = require('express')
const {create} = require("../tokens");
const router = express.Router()

/**
 * {
 username: {string},
 password: {string}
}

 200: Käyttäjän tunnistus OK
  Vastauksen runko: { "token": {jwt-token} }
 400: Tunnistus ei onnistunut
  Vastauksen runko: { "error": "Invalid credentials" }

 Voit tehdä käyttäjien hallinnasta mockup-toteutuksen, joka tunnistaa vain käyttäjän mark
 salasanalla giraffe.
  JSON Web Tokenin saat luotua käyttämällä moduulin tokens.js funktiota create(username).

 */
router.post('/', (req, res, next) => {
    const username = req.body.username
    const password = req.body.password
    console.log(username)
    if (username === 'mark' && password === 'giraffe') {
        const token = create(username)
        res.status(200).json({"token": token})
    } else {
        res.status(400).json({"error": "Invalid credentials"})
    }
})

module.exports = router;
