console.log ('Esto es un arreglo')
const arr1 = [
    "Bogotá",
    "Manizales",
    "Pereira",
    "Santa Martha",
    "Algeciras",
    "Barranquilla"
]

const arr2 = [
    "Medellín",
    "Zetaquira",
    "Quibdó",
    "Salento",
    "Tunja",
    "Ísla"
]

const arr3 = arr1.concat(arr2)
arr3.sort()
console.log (arr3)

console.clear ()
console.table (arr1)
console.table (arr2)
console.table (arr3)

