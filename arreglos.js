// Ejercicios de arreglos.

const temas = [
    'Naturaleza',
    'Animales',
    'Ciudades',
    'Especies',
    'Deportes',
    'Razas',
    'Aves',
    'Muebles',
    'Automóviles',
    'Profesiones',
    'Estímulos',
    'Libros',
    'Recetas'
]


const numeros = [1, 5, 8, 10, 25, 2, 3, 23, 3, 35]

//console.log (temas.length)


// Imprimimos

const imprimeTemas = (arreglo) => {
    arreglo.forEach((element, index) => {
        console.log (element)
    });
}

// imprimeTemas(temas)

// console.log (temas.sort())

// temas.sort ((ele1, ele2) => {
//     return ele1 - ele2
// })

// console.log (temas)

// console.log (numeros.sort( (a, b) => {
//     return a - b
// }))

const nuevoArreglo = [...temas, ...numeros]

// console.log (nuevoArreglo.sort ( (a, b) => {
//     return a - b
// }))

// console.log (nuevoArreglo.length)

// numeros aletatorios.


let arregloAleatorios = []
// En un bucle creamos 15 aleatorios y los colocamos en un arreglo.

for (let x = 0; x < 35; x++) {
    arregloAleatorios.push(Math.floor(Math.random() * (16 - 1)) + 1)
}

console.log (arregloAleatorios.sort ((a, b) => {return a - b}))

// console.log (arregloAleatorios.findIndex(elemento => elemento == 100))

// Vemos el número de repeticiones.
// Enun arreglo colocamos los números que salieron y cuántas veces se repiten.
// Habría que ver en otro arreglo colocar los números que no se repiten.

let totRepeticiones = arregloAleatorios.reduce ( (acumulador, elemento, index) => {
    let elem = acumulador.findIndex(valor => valor.numero == elemento)

    if (elem == -1) {
        acumulador = acumulador.concat({
            numero: elemento,
            itera: 1
        })
    } else {
        acumulador[elem].itera = acumulador[elem].itera + 1
    }
    return acumulador
}, [])

console.log (totRepeticiones.sort ((ele1, ele2) => {
    return ele2.numero - ele1.numero
}))
