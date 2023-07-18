//Declaramos todas las variables en el scope global

const mainContainer = document.querySelector('main')
const gofito = document.querySelector('#gofito')
var impulso = 100;
var gravedad = 0.5;


//Cuidado modificar gofitoY si cambiamos el suelo
var suelo = 170;
var gofitoY = suelo;

var jumping = false;
var direction = 1;

var timerJump;


//Vamos a hacer que Gofito salte

window.addEventListener('keydown', function (e) {
    if (e.key === ' ' && !jumping) {
        console.log("Estoy saltando!!")
        jumping = true;
        timerJump = setInterval(jump, 300);
    }
}
)

function jump() {

    if (gofitoY < suelo || gofitoY > 70) {
        direction *= -1;
    }
    console.log(gofitoY);
    gofitoY += impulso * direction;
    gofito.style.top = gofitoY + 'px';

    if (gofitoY >= suelo) {
        clearInterval(timerJump)
        jumping = false;
        console.log("Ya no estoy saltando")
    }


}

