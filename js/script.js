import { Gofito } from './gofito.js'
import { Obstacle } from './obstacles.js'


const screen1 = document.getElementById('screen-1');
const screen2 = document.getElementById('screen-2');
const screen3 = document.getElementById('screen-3');

const startGame = document.getElementById('start-game')
const restartGame = document.getElementById('restart')

const mainContainer = document.querySelector('.game-board')
const gofito = new Gofito(50, 380, mainContainer)
const obstacles = []

let obstacleTimer
let gofitoTimer

startGame.addEventListener('click', function () {
    screen1.setAttribute('class', 'hidden')
    screen2.setAttribute('class', 'game-board')
    start()
})


restartGame.addEventListener('click', function () {
    screen3.setAttribute('class', 'hidden')
    screen2.setAttribute('class', 'game-board')
    gofito.isDead = false;
    start()
})

function start() {
    gofito.insertGofito()
    document.addEventListener('keydown', function (e) {
        if (e.key === ' ') gofito.jumping = true;
    });
    gofitoTimer = setInterval(gofitoJumping, 100)
    obstacleTimer = setInterval(createObstacle, 2000)
}

function gofitoJumping() {
    if (gofito.jumping) {
        gofito.jump();
    }

    if (gofito.isDead) {
        clearInterval(gofitoTimer)
        clearInterval(obstacleTimer)
        for (let i = 0; i < obstacles.length; i++) {
            clearInterval(obstacles[i].timerId);
            obstacles[i].removeObstacle(i) //Cambios
        }
        screen2.setAttribute('class', 'hidden')
        screen3.setAttribute('class', 'wrapper')
    }
}

function createObstacle() {
    const obstacle = new Obstacle(920, 390, mainContainer, obstacles, gofito)
    obstacles.push(obstacle)
    obstacle.insertObstacle()
}


