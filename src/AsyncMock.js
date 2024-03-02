const products = [
    {
        id:'1',
        nombre:'Classic GlitchPop',
        precio:'$10.000',
        categoria:'pistola',
        img:'pegar aca link de la pistolita glitchpop',
        stock: 20,
        descripcion:'descripción de la skin específica'
    },
    {
        id:'2',
        nombre:'Classic Suprema',
        precio:'$20.000',
        categoria:'pistola',
        img:'pegar link classic suprema',
        stock:20,
        descripcion:'una de las favoritas de todos los tiempos'

    },
    {
        id:'3',
        nombre:'Ghost Sepulcral',
        precio:'$10.000',
        categoria:'pistola',
        img:'pegar link Ghost Sepulcral',
        stock:20,
        descripcion:'una de las favoritas de todos los tiempos'

    },
    {
        id:'4',
        nombre:'Ghost Venganza de Gaia',
        precio:'$9.000',
        categoria:'pistola',
        img:'pegar link Ghost Gaia',
        stock:20,
        descripcion:'una de las favoritas de todos los tiempos'

    },
    {
        id:'5',
        nombre:'Sheriff Neo Frontier',
        precio:'$20.000',
        categoria:'pistola',
        img:'pegar link Sheriff Neo Frontier',
        stock:20,
        descripcion:'una de las favoritas de todos los tiempos'

    },
    {
        id:'6',
        nombre:'Spectre Wasteland',
        precio:'$12.000',
        categoria:'metralleta',
        img:'pegar link Spectre Wasteland',
        stock:20,
        descripcion:'una de las favoritas de todos los tiempos'

    },
    {
        id:'7',
        nombre:'Spectre Soulstrife',
        precio:'$19.000',
        categoria:'metralleta',
        img:'pegar link Soulstrife',
        stock:20,
        descripcion:'una de las favoritas de todos los tiempos'

    },
    {
        id:'8',
        nombre:'Vandal Araxys',
        precio:'$22.000',
        categoria:'metralleta',
        img:'pegar link Vandal Araxys',
        stock:20,
        descripcion:'una de las favoritas de todos los tiempos'

    },
    {
        id:'9',
        nombre:'Vandal Elderflame',
        precio:'$20.000',
        categoria:'metralleta',
        img:'pegar link Vandal Elderflame',
        stock:20,
        descripcion:'una de las favoritas de todos los tiempos'

    },
    {
        id:'10',
        nombre:'Phantom Magepunk',
        precio:'$20.000',
        categoria:'metralleta',
        img:'pegar link Phantom Magepunk',
        stock:20,
        descripcion:'una de las favoritas de todos los tiempos'

    },
    {
        id:'11',
        nombre:'Judge Piedra del Sol',
        precio:'$8.000',
        categoria:'escopeta',
        img:'pegar link Judge Piedra del Sol',
        stock:20,
        descripcion:'una de las favoritas de todos los tiempos'

    },
    {
        id:'12',
        nombre:'Judge Glitchpop',
        precio:'$16.000',
        categoria:'escopeta',
        img:'pegar link Judge Glitchpop',
        stock:20,
        descripcion:'una de las favoritas de todos los tiempos'

    },
    {
        id:'13',
        nombre:'Operator Ion',
        precio:'$20.000',
        categoria:'francotirador',
        img:'pegar link Operator Ion',
        stock:20,
        descripcion:'una de las favoritas de todos los tiempos'

    },
    {
        id:'14',
        nombre:'Operator Infantry',
        precio:'$20.000',
        categoria:'francotirador',
        img:'pegar link Operator Infantry',
        stock:20,
        descripcion:'una de las favoritas de todos los tiempos'

    },
    {
        id:'15',
        nombre:'Marshal Sovereign',
        precio:'$15.000',
        categoria:'francotirador',
        img:'pegar link Marshal Sovereign',
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
