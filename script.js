import { Gofito } from './gofito.js'
import { Obstacles } from './obstacles.js'

const mainContainer = document.querySelector('main')
const gofito = new Gofito(50, 210, mainContainer)
const obstacles = new Obstacles(700, 220, mainContainer, gofito)
function start() {
    gofito.insertGofito()
    obstacles.insertObstacles()
}
console.log(Gofito)

window.addEventListener('keydown', function (e) {
    if (e.key === ' ' && !gofito.jumping) {
        console.log("Estoy saltando!!")
        console.log(gofito.y);
        gofito.jumping = true;
        gofito.timerJump = setInterval(gofito.jump, 100);
    }
}
)

start()

