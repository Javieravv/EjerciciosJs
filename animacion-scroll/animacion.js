addEventListener ('DOMContentLoaded', () => {
    const contadores = document.querySelectorAll('.contador_cantidad')
    const velocidad = 3000

    const animarContadores = () => {
        for (const contador of contadores ) {
            const actualizar_contador = () => {
                let cantidad_maxima = +contador.dataset.cantidadTotal,
                    valor_actual = +contador.innerText,
                    incremento = cantidad_maxima / velocidad;
                if ( valor_actual < cantidad_maxima ) {
                    contador.innerText = Math.ceil ( valor_actual + incremento )
                    setTimeout(actualizar_contador, 5);
                } else {
                    contador.innerText = cantidad_maxima
                }
            }
            actualizar_contador ()
        }
    }

    const mostrarContadores = ( elementos ) => {
        // console.log (elementos)
        elementos.forEach( elemento => {
            if ( elemento.isIntersecting ) {
                elemento.target.classList.add('animar')
                elemento.target.classList.remove('ocultar')
                setTimeout ( animarContadores, 300)
            }
        })
    }

    const mostrarParrafo = parrafos => {
        console.log ('VAMOS EN EL PARRAFO....',parrafos)
        parrafos.forEach( parrafo => {
            if ( parrafo.isIntersecting ) {
                parrafo.target.classList.add('cambio-parrafo-oculto')
                parrafo.target.classList.remove('parrafo-oculto')
            }
        })
    }


    // usamos la API IntersectionObserver
    const observer = new IntersectionObserver (mostrarContadores, {
        threshold: 0.75 
    })

    const observer1 = new IntersectionObserver (mostrarParrafo, {
        threshold: 0.75
    })

    // elementos que el observer necesita ver
    const elementosHTML = document.querySelectorAll('.contador')
    // console.log ( elementosHTML )
    elementosHTML.forEach ( elementoHtml => {
        observer.observe(elementoHtml)
    })

    const parrafosOcultos = document.querySelectorAll('.parrafo_oculto')
    parrafosOcultos.forEach ( parrafo => {
        observer1.observe ( parrafo )
    })

})