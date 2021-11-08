const numeros = [1,65,58,98,69,63,-25,15,-18,100, -1, 9589635, -658665, -586, 458, 589, -987, 9858, 854, -89858]

// console.log (numeros)

const total1 = numeros.reduce ((acc, num) => {
    if (num < 0) {
        return acc + num
    } else {
        return acc + 0
    }
}, 0 )

const menorescero = numeros.reduce ((acc, num) => {
    if (num < 0) {
        return acc.concat(num)
    } else {
        return acc
    }
}, [])

const menoresmayorescero = numeros.reduce ((acc, num) => {
    if (num < 0) {
        // return acc.menores = acc.menores.concat(num)
        acc.menores = acc.menores.concat(num)
        acc.totalmenores = acc.totalmenores + num
    } else {
        // return acc.mayores = acc.mayores.concat(num)
        acc.mayores = acc.mayores.concat(num)
        acc.totalmayores = acc.totalmayores + num
    }
    if (num < acc.numeromenor) {
        acc.numeromenor = num
    }
    if (num > acc.numeromayor) {
        acc.numeromayor = num
    }
    return acc
}, {
    menores: [], 
    mayores: [], 
    totalmenores: 0, 
    totalmayores: 0,
    numeromenor: 0,
    numeromayor: 0
})

// const total = numeros.reduce ((acc, num) => {return acc + num}, 0 )

// console.log (total, total1, menorescero, menoresmayorescero)

console.log (menoresmayorescero)

