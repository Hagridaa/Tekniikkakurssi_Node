const tulostaTahtia = maara =>  {
    let tahdet = []
    for (let star of Array(maara).keys()) {
        tahdet.push('*')
    }
    console.log(tahdet.join(' '))
};

tulostaTahtia(10);

const tulostaTulos = (tulostus) => {
    let viivat = []
    const pituus = tulostus.toString().length
    for(let x of Array(pituus).keys()) {
        viivat.push('-')
    }
    console.log(viivat.join(''))
    console.log(tulostus)
    console.log(viivat.join(''))
}

tulostaTulos(34523452);
tulostaTulos("Tämä on lopputulos")

module.exports = {
    tulostaTahtia,
    tulostaTulos
}

