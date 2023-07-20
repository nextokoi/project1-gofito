import { Gofito } from './gofito.js'
import { Obstacle } from './obstacles.js'


const screen1 = document.getElementById('screen-1');
const screen2 = document.getElementById('screen-2');
const screen3 = document.getElementById('screen-3');



const startGame = document.getElementById('start-game');
startGame.addEventListener('click', firstGame)

function firstGame() {
    screen1.setAttribute('class', 'wrapper hidden')
    screen2.setAttribute('class', 'game-board')
    game()
}

const restartGame = document.getElementById('restart');
restartGame.addEventListener('click', reGame)

function reGame() {
    screen2.setAttribute('class', 'game-board')
    screen3.setAttribute('class', 'hidden')
    game()
}


function game() {

    gofito.isDead = false

    const mainContainer = document.querySelector('.game-board')
    const gofito = new Gofito(50, 380, mainContainer)
    const obstacles = []
    let obstacleTimer

    function start() {
        gofito.insertGofito()
        obstacleTimer = setInterval(createObstacle, 2000)
        
    }

    function createObstacle() {
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

// Crear un intervalo nuevo, 
// Comprobar gofito vivo o muerto
// si gofito.isDead= true hacemos clear interval y reiniciamos todo
// Cambiar a gofito.isDead=false antes de iniciar el juego

