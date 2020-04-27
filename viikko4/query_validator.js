/*
    Tutkii Authorization-otsikon sisällön ja vastaa koodilla 401,
    jos otsikkotieto puuttuu,
    on virheellinen tai ei sisällä voimassa olevaa tokenia
    Sinun on tutkittava pyynnön otsikkotietoja päästäksesi käsiksi tokeniin.
    Ne ovat attribuutissa headers.
     Authorization-headerin sisältä on merkkijono,
    ja ensimmäisenä tulee autentikaatiotyyppi (Bearer),
    sitten välilyönnillä erotettuna token.
    Saat osat erotettua helposti merkkijonoluokan metodilla split.
     JSON Web Tokenin saat tarkistettua käyttämällä moduulin tokens.js funktiota verify(token)
 */
const {verify} = require("./tokens");
const queryValidator = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    console.log("Given headers: " + JSON.stringify(authHeader))
    if (authHeader !== undefined) {
        if (authHeader.startsWith("Bearer ")){
            const token = authHeader.substring(7, authHeader.length);
            console.log("Given headers: " + token)
            const verifyToken = verify(token)
            if (verifyToken === undefined) {
                res.status(401).send("token viallinen")
                const err = new Error("token viallinen")
                next(err)
            } else {
                console.log("Token kelpaa")
                next()
            }
        }
    }
     else {
        console.error("Pieleen meni")
        res.status(401).send("token viallinen")
        const err = new Error("pieleen meni")
        next(err)
    }
    next()
}

module.exports = queryValidator
