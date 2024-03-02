const products = [
    {
        id:'1',
        nombre:'Classic GlitchPop',
        precio:'$10.000',
        categoria:'pistola',
        img:'https://i.postimg.cc/NG4pswZ2/Classic-glitchpop-2-0-VALORANT.png',
        stock: 20,
        descripcion:'descripción de la skin específica'
    },
    {
        id:'2',
        nombre:'Classic Suprema',
        precio:'$20.000',
        categoria:'pistola',
        img:'https://i.postimg.cc/C14Hxjrp/Classic-prime-VALORANT.png',
        stock:20,
        descripcion:'una de las favoritas de todos los tiempos'

    },
    {
        id:'3',
        nombre:'Ghost Sepulcral',
        precio:'$10.000',
        categoria:'pistola',
        img:'https://i.postimg.cc/0j2GMbhM/Ghost-reaver-2-0-black-VALORANT.png',
        stock:20,
        descripcion:'una de las favoritas de todos los tiempos'

    },
    {
        id:'4',
        nombre:'Ghost Venganza de Gaia',
        precio:'$9.000',
        categoria:'pistola',
        img:'https://i.postimg.cc/CKksWyj1/Ghost-gaias-vengeance-VALORANT.png',
        stock:20,
        descripcion:'una de las favoritas de todos los tiempos'

    },
    {
        id:'5',
        nombre:'Sheriff Neo Frontier',
        precio:'$20.000',
        categoria:'pistola',
        img:'https://i.postimg.cc/Dzr1xrT4/Sheriff-arcane-VALORANT.png',
        stock:20,
        descripcion:'una de las favoritas de todos los tiempos'

    },
    {
        id:'6',
        nombre:'Spectre Wasteland',
        precio:'$12.000',
        categoria:'metralleta',
        img:'https://i.postimg.cc/ncrYn9vN/Spectre-wasteland-VALORANT.png',
        stock:20,
        descripcion:'una de las favoritas de todos los tiempos'

    },
    {
        id:'7',
        nombre:'Spectre Soulstrife',
        precio:'$19.000',
        categoria:'metralleta',
        img:'https://i.postimg.cc/tgQhdrLH/Spectre-soulstrife-VALORANT.png',
        stock:20,
        descripcion:'una de las favoritas de todos los tiempos'

    },
    {
        id:'8',
        nombre:'Vandal Araxys',
        precio:'$22.000',
        categoria:'metralleta',
        img:'https://i.postimg.cc/FzRcFwJ0/Vandal-araxys-black-VALORANT.png',
        stock:20,
        descripcion:'una de las favoritas de todos los tiempos'

    },
    {
        id:'9',
        nombre:'Vandal Elderflame',
        precio:'$20.000',
        categoria:'metralleta',
        img:'https://i.postimg.cc/3JqjNr1N/Vandal-elderflame-VALORANT.png',
        stock:20,
        descripcion:'una de las favoritas de todos los tiempos'

    },
    {
        id:'10',
        nombre:'Phantom Spectrum',
        precio:'$20.000',
        categoria:'metralleta',
        img:'https://i.postimg.cc/x1kR3N8L/Phantom-spectrum-VALORANT.png',
        stock:20,
        descripcion:'una de las favoritas de todos los tiempos'

    },
    {
        id:'11',
        nombre:'Judge Piedra del Sol',
        precio:'$8.000',
        categoria:'escopeta',
        img:'https://i.postimg.cc/jqZ4V4Jz/Judge-piedra-del-sol-VALORANT.png',
        stock:20,
        descripcion:'una de las favoritas de todos los tiempos'

    },
    {
        id:'12',
        nombre:'Judge Glitchpop',
        precio:'$16.000',
        categoria:'escopeta',
        img:'https://i.postimg.cc/RFmLmPRT/Judge-glitchpop-blue-VALORANT.png',
        stock:20,
        descripcion:'una de las favoritas de todos los tiempos'

    },
    {
        id:'13',
        nombre:'Operator Ion',
        precio:'$20.000',
        categoria:'francotirador',
        img:'https://i.postimg.cc/Z51L7Yv2/Operator-ion-VALORANT.png',
        stock:20,
        descripcion:'una de las favoritas de todos los tiempos'

    },
    {
        id:'14',
        nombre:'Operator Infantry',
        precio:'$20.000',
        categoria:'francotirador',
        img:'https://i.postimg.cc/hPtMh5qy/Operator-infantry-VALORANT.png',
        stock:20,
        descripcion:'una de las favoritas de todos los tiempos'

    },
    {
        id:'15',
        nombre:'Vandal Cryostasis',
        precio:'$15.000',
        categoria:'metralleta',
        img:'https://i.postimg.cc/8zrR68XH/Vandal-cryostasis-VALORANT.png',
        stock:20,
        descripcion:'una de las favoritas de todos los tiempos'

    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        },500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
    }

    export const getProductsByCategory = (productsByCategory) => {
        return new Promise((resolve) =>{
            setTimeout(() => {
                resolve(products.find(prod => prod.category === productsByCategory))
            }, 500)
        }) }
