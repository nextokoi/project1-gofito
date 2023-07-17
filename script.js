//Declaramos todas las variables en el scope global

const mainContainer = document.querySelector('main')
const gofito = document.querySelector('#gofito')
var impulso = 100;
var gravedad = 2500;

//Cuidado modificar gofitoY si cambiamos el suelo
var suelo = 170;
var gofitoY = suelo;


//Vamos a hacer que Gofito salte

window.addEventListener('keydown', function (e) {
    if (e.key == ' ') {
        console.log("Estoy saltando!!")
        Jump()
    }
})

window.addEventListener('keyup', function (e) {
    if (e.key == ' ') {
        console.log("Ya no estoy saltando")
        gofitoY = suelo
    }
})

function Jump() {
    let gofitoSaltando = gofitoY
    
    if (gofitoY === suelo) {
        gofitoSaltando = gofitoY - impulso

    }
    gofito.style.top = gofitoSaltando +"px"

}


