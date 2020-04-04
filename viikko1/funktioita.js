
const {tulostaTahtia, tulostaTulos} = require("./tulostus");

const tulostaNelio = (sivu) => {
    for(let x of Array(sivu).keys())
        tulostaTahtia(sivu)
}

tulostaNelio(4)

const tulostaSuorakulmio = (leveys, korkeus) => {
        for( let i = 1 ; i <= korkeus; i++) {
            tulostaTahtia(leveys)
        }
}

tulostaSuorakulmio(5, 3);

const tulostaKolmio = (korkeus) => {
    for( let i = 1 ; i <= korkeus; i++) {
        tulostaTahtia(i)
    }
}

tulostaKolmio(5)

const lukusarjanSumma = (maara) => {
    const lukusarja = Array.from({length:maara +1}, (v,i) => i)
    return lukusarja.reduce((acc,val) => acc + val, 0)
    //reduce erottaa arrayn numerot alusta asti omiksi arvoikseen
}

tulostaTulos(lukusarjanSumma(100))

const kertoma = (arvo)=> Array.from({length: arvo + 1}, (v, i) => i).reduce((acc, val) => acc * (val === 0 ? 1 : val), 1)

tulostaTulos(kertoma(20))


module.exports = {
    tulostaNelio,
    tulostaKolmio,
    tulostaSuorakulmio,
    kertoma,
    lukusarjanSumma

}

