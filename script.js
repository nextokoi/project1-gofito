import { Gofito } from './gofito.js'
//Declaramos todas las variables en el scope global

const mainContainer = document.querySelector('main')
const gofito = new Gofito(50, 210, mainContainer)
gofito.insertGofito()
console.log(Gofito)
//Vamos a hacer que Gofito salte

window.addEventListener('keydown', function (e) {
    if (e.key === ' ' && !gofito.jumping) {
        console.log("Estoy saltando!!")
        console.log(gofito.y);
        gofito.jumping = true;
        gofito.timerJump = setInterval(gofito.jump, 300);
    }
}
)

