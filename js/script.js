import { Gofito } from './gofito.js'
import { Obstacle } from './obstacles.js'

const startGame = document.getElementById('start-game');
const screen1 = document.getElementById('screen-1');
const screen2 = document.getElementById('screen-2');
const screen3 = document.getElementById('screen-3');

startGame.addEventListener('click', game)

function game(){
    screen1.setAttribute('class', 'wrapper hidden')
    screen2.removeAttribute('class', 'hidden')
    screen2.setAttribute('class', 'game-board')

    const mainContainer = document.querySelector('.game-board')
    const gofito = new Gofito(50, 380, mainContainer)
    const obstacles = []
    let obstacleTimer

    function start() {
        gofito.insertGofito()
        obstacleTimer = setInterval(createObstacle, 2000)
    }

    function createObstacle(){
        const obstacle = new Obstacle(920, 390, mainContainer, obstacles, gofito)
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


}