//Declaramos todas las variables en el scope global

const mainContainer = document.querySelector('main')
const gofito = document.querySelector('#gofito')
var impulso = 900;
var gravedad = 2500;

//Cuidado modificar gofitoY si cambiamos el suelo
var gofitoY = suelo;
var suelo = 170;


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
    }
})

function Jump() {
    let gofitoSaltando
    
    if (gofitoY === suelo) {
        gofitoSaltando = gofitoY + impulso

    }
    gofito.style.top = gofitoSaltando +"px"

}


