import { Gofito } from './gofito.js'
import { Obstacle } from './obstacles.js'

const mainContainer = document.querySelector('main')
const gofito = new Gofito(50, 210, mainContainer)
const obstacles = []
let obstacleTimer

function start() {
    gofito.insertGofito()
    obstacleTimer = setInterval(createObstacle, 2000)
}

function createObstacle(){
    const obstacle = new Obstacle(920, 220, mainContainer, obstacles)
    obstacles.push(obstacle)
    obstacle.insertObstacle()
}

window.addEventListener('keydown', function (e) {
    if (e.key === ' ' && !gofito.jumping) {
        gofito.jumping = true;
        gofito.timerJump = setInterval(gofito.jump, 100);
    }
})

start()

