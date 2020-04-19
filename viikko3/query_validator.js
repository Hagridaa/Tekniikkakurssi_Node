const queryValidator = (req, res, next) => {
    console.log('validating query')
    const parametrit = ['temperature', 'humidity', 'wind']
    const observations = req.query.observation
    console.log(`observations: ${observations}`)

    if (Object.keys(req.query).length === 0) {
        console.log('lenght was 0')
        next()
    }
    else {
        console.log('luupataan parametrit arvot')
        const keys = Object.keys(observations);
        for (const key of keys) {
            if (!parametrit.includes(observations[key])) {
                console.log("Incorrect parameter found")
                const err = new Error(`Virheellinen parametri: ${key}`)
                err.statusCode = 400
                next(err)
            }
            else {
                next()
            }
        }
    }
}

module.exports = queryValidator