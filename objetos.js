console.log("probando objetos")

const departamentos = [
    {
        name: "Antioquia",
        municipios: [
            "Medellín",
            "Envigado",
        ],
    },
    {
        name: "Boyacá",
        municipios: [
            "Tunja",
            "Miraflores",
            "Ramiriquí",
        ],
    },
    {
        name: "Cundinamarca",
        municipios: [
            "Bogotá",
            "Villapinzón",
            "La Mesa",
        ],
    },
    {
        name: "Antioquia",
        municipios: [
            "Santafe de Antioquia",
            "El peñón",
            "Salento",
        ],
    },

    
]

//console.log (departamentos)

listDepartamentos = departamentos.map (departamento => departamento.name)
//console.log (listDepartamentos)

const listMunicipios = (departamento) => {
     const depto = departamentos.find(depto => depto.name === departamento)

    // console.log(departamentos)
    console.log (depto ? depto.municipios : 'No hay departamento así')
    console.log (departamentos.indexOf(departamento))
}

listMunicipios ('Antioquia')

