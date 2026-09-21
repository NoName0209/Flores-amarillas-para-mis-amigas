/* =====================================================
   CREAR PARTÍCULAS DE LA ESTRELLA
===================================================== */

const contenedorParticulas =
    document.getElementById("particulas");


function crearParticula() {

    const particula =
        document.createElement("div");

    particula.classList.add(
        "particula-intro"
    );


    /*
       Cada partícula viajará
       hacia un punto diferente.
    */

    const x =
        15 + Math.random() * 70;

    const y =
        15 + Math.random() * 70;


    particula.style.setProperty(
        "--x",
        x + "%"
    );

    particula.style.setProperty(
        "--y",
        y + "%"
    );


    particula.style.animationDelay =
        (Math.random() * 1.5) + "s";


    contenedorParticulas.appendChild(
        particula
    );


    setTimeout(() => {

        particula.remove();

    }, 4500);

}


/*
   Las partículas empiezan a salir
   después de que aparece la estrella.
*/

setTimeout(() => {

    for (let i = 0; i < 45; i++) {

        setTimeout(() => {

            crearParticula();

        }, i * 55);

    }

}, 3800);



/* =====================================================
   BOTÓN DESCUBRIR
===================================================== */

function irAHistoria() {

    const seccion =
        document.getElementById(
            "universo-seccion"
        );

    seccion.scrollIntoView({

        behavior: "smooth"

    });

}



/* =====================================================
   ANIMACIÓN DE SECCIONES
===================================================== */

const secciones =
    document.querySelectorAll(
        ".universo-seccion, " +
        ".transicion-flor, " +
        ".carta, " +
        ".final"
    );


const observador =
    new IntersectionObserver(

        (entradas) => {

            entradas.forEach(
                (entrada) => {

                    if (
                        entrada.isIntersecting
                    ) {

                        entrada.target
                            .classList
                            .add("visible");

                    }

                }
            );

        },

        {
            threshold: 0.18
        }

    );


secciones.forEach(
    (seccion) => {

        observador.observe(
            seccion
        );

    }
);



/* =====================================================
   PÉTALOS FINALES
===================================================== */

const contenedorCaida =
    document.getElementById(
        "petalosCaida"
    );


function crearPetalo() {

    const petalo =
        document.createElement(
            "div"
        );

    petalo.classList.add(
        "petalito"
    );


    /*
       Posición horizontal
    */

    petalo.style.left =
        Math.random() * 100 + "%";


    /*
       Tamaño aleatorio
    */

    const tamaño =
        5 + Math.random() * 8;

    petalo.style.width =
        tamaño + "px";

    petalo.style.height =
        tamaño * 1.6 + "px";


    /*
       Movimiento lateral
    */

    const movimiento =
        30 + Math.random() * 80;

    petalo.style.setProperty(
        "--movimiento",
        movimiento + "px"
    );


    /*
       Velocidad
    */

    const duracion =
        7 + Math.random() * 7;

    petalo.style.animationDuration =
        duracion + "s";


    contenedorCaida.appendChild(
        petalo
    );


    setTimeout(() => {

        petalo.remove();

    }, duracion * 1000);

}



/* =====================================================
   CREAR PÉTALOS CUANDO SE VE EL FINAL
===================================================== */

const final =
    document.getElementById("final");


const observadorPetalos =
    new IntersectionObserver(

        (entradas) => {

            entradas.forEach(
                (entrada) => {

                    if (
                        entrada.isIntersecting
                    ) {

                        crearPetalo();

                    }

                }
            );

        },

        {
            threshold: 0.2
        }

    );


observadorPetalos.observe(final);



/*
   Una pequeña lluvia continua
   mientras estamos en el final.
*/

setInterval(() => {

    const visible =
        final.classList.contains(
            "visible"
        );

    if (visible) {

        crearPetalo();

        if (
            Math.random() > 0.4
        ) {

            setTimeout(() => {

                crearPetalo();

            }, 500);

        }

    }

}, 1300);