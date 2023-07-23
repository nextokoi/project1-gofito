// Insert audio
var music = new Audio('../sounds/swingbee-sound.mp3')

//Import the classes Gofito, Obstacle and Pintadera
import { Gofito } from './gofito.js'
import { Obstacle } from './obstacles.js'
import { Pintadera } from './pintadera.js'

//Import DOM elements representig the game screens, the bottons and the main-container.
const screen1 = document.getElementById('screen-1');
const screen2 = document.getElementById('screen-2');
const screen3 = document.getElementById('screen-3');
const screen4 = document.getElementById('screen-4');
const startGame = document.getElementById('start-game')
const restartGame = document.getElementById('restart')
const mainContainer = document.querySelector('.game-board')

const floor = document.querySelector('#floor')
let floorPosition = 0;

//Create gofito
const gofito = new Gofito(50, 364, mainContainer)

//We declare variables and constants in the global scope
const obstacles = []
let obstacleCounter = 0
let winCondition = 8 //Modify to define the end of the game
let obstacleTimer
let pintaderaTimer
let gofitoTimer

startGame.addEventListener('click', function () { //When we click START GAME...
    screen1.setAttribute('class', 'hidden')
    screen2.setAttribute('class', 'game-board')
    clearGameIntervals()
    clearObstacles()
    start()
    music.play() //Play music 
})

restartGame.addEventListener('click', function () { //When we click RESTART...
    screen3.setAttribute('class', 'hidden')
    screen2.setAttribute('class', 'game-board')
    clearGameIntervals()
    clearObstacles()
    gofito.isDead = false
    gofito.win = false
    floorPosition = 0
    floor.style.left = floorPosition + 'px'
    start()
})

function clearGameIntervals() {
    clearInterval(gofitoTimer)
    clearInterval(obstacleTimer)
    clearInterval(pintaderaTimer)

}

function clearObstacles() {
    for (let i = 0; i < obstacles.length; i++) {
        clearInterval(obstacles[i].timerId);
        obstacles[i].removeObstacle(i)
    }
    obstacleCounter = 0
    obstacles.length = 0
}

function start() { //Sets the start of the game
    gofito.insertGofito()

    function moveFloor() { //Move the floor to make it look like Gofito is walking
        floorPosition -= 5
        if (floorPosition <= -1000) {
            floorPosition = 0;
        }
        floor.style.left = floorPosition + 'px';
    }
    setInterval(moveFloor, 200)


    document.addEventListener('keydown', function (e) { //Event listener, so Gofito can jump when we keydown space
        if (e.key === ' ') gofito.jumping = true;
    });

    gofitoTimer = setInterval(gofitoCheckGameStatus, 100)
    obstacleTimer = setInterval(createObstacle, 2000)
    pintaderaTimer = setInterval(createPintadera, 2000)
}

function gofitoCheckGameStatus() {
    if (gofito.jumping) { //When gofito.jumping = true, executes the jump function
        gofito.jump();
    }

    if (gofito.win === true) { //WIN - clear intervales and obstacles
        gofito.isDead = false
        clearInterval(gofitoTimer)
        clearInterval(obstacleTimer)
        clearObstacles()
        screen2.setAttribute('class', 'hidden')
        screen4.setAttribute('class', 'wrapper')
    }

    if (gofito.isDead) { //GAME OVER - clear intervales and obstacles
        clearInterval(gofitoTimer)
        clearInterval(obstacleTimer)
        clearObstacles()
        obstacleCounter = 0 //Restart the counter
        screen2.setAttribute('class', 'hidden')
        screen3.setAttribute('class', 'wrapper')
    }
}

function createObstacle() { //Executed by intervales in the start function
    if (obstacleCounter < winCondition) { //Condition: number of obstacles less than the winCondition
        const obstacle = new Obstacle(920, 400, mainContainer, obstacles, gofito)
        obstacles.push(obstacle)
        obstacle.insertObstacle()

        obstacleCounter++
        console.log(obstacleCounter)
    }
}

function createPintadera() {
    if (obstacleCounter === winCondition) {//When number of obstacles is equal to winCondition we create and insert the final door
        const pintadera = new Pintadera(1020, 330, mainContainer, gofito)
        pintadera.insertPintadera()
        console.log(pintadera)

        clearInterval(pintaderaTimer) //Clear interval in order not to create new 'pintaderas'

    }

}
