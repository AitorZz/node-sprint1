

     export const datosSaludo = (nombre, apellido, callback) => {

    if (nombre === 'Aitor' && apellido !== 'Zamora') {
        let result = 'Aitor'
        callback(result)
    } if (nombre !== 'Aitor' && apellido === 'Zamora') {
        let result = 'Zamora'
        callback(result)
    } if (nombre === 'Aitor' && apellido === 'Zamora') {
        let result = 'Aitor Zamora'
        callback(result)
    } else {
        throw Error('Introduce a correct name')
    }
}

export let imprimirSaludo = (result) => {return `Hola ${result}`}

datosSaludo('Aitor', 'Zamora', imprimirSaludo);

