//Declaramos todas las variables en el scope global

const mainContainer = document.querySelector('main')
const gofito = document.querySelector('#gofito')
var impulso = 100;
var gravedad = 0.3;


//Cuidado modificar gofitoY si cambiamos el suelo
var suelo = 210;
var gofitoY = suelo;

var jumping = false;
//var direction = 1;

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

    if (jumping && impulso >= 0.25) {
        gofitoY -= impulso
        impulso *= gravedad
        gofito.style.top = gofitoY + 'px';
    } else if (gofitoY < suelo) {
        gofitoY += 30
        console.log ("Estoy bajando!")
        gofito.style.top = gofitoY + 'px';
        
    } else {
        impulso = 100
        gravedad = 0.3
        clearInterval(timerJump)
        jumping = !jumping
    }
   

}

