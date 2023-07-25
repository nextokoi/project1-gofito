// Insert audio
var music = new Audio('../sounds/coldplay.mp3')
var musicGameOver = new Audio('../sounds/game-over.mp3')
var musicWin = new Audio('../sounds/win.mp3')
music.volume = 0.15;
musicGameOver.volume = 0.15;
musicWin.volume = 0.15;

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

const gofitoStanding = document.getElementById('standing');
const gofitoTongue = document.getElementById('tongue');

//Create gofito
const gofito = new Gofito(50, 364, mainContainer)

//We declare variables and constants in the global scope
let obstacles = []
let obstacleCounter = 0
let winCondition = 3 //Modify to define the end of the game 
let obstacleTimer
let pintaderaTimer
let gofitoTimer

let pintadera


/* Features */

gofitoStanding.addEventListener('mouseover', function () {
    gofitoTongue.style.display = 'block';
    gofitoStanding.style.display = 'none';
})

gofitoTongue.addEventListener('mouseout', function () {
    gofitoTongue.style.display = 'none';
    gofitoStanding.style.display = 'block';
})

/* Game */

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
    gofito.isDead = false
    floorPosition = 0
    pintadera = undefined
    floor.style.left = floorPosition + 'px'
    start()
    musicGameOver.pause()
    musicWin.pause()
    music.play()
})

function clearGameIntervals() { //Clear all intervals
    clearInterval(gofitoTimer)
    clearInterval(obstacleTimer)
    clearInterval(pintaderaTimer)
}

function clearObstacles() { //Clear all obstacles
    for (let i = 0; i < obstacles.length; i++) {
        obstacles[i].removeObstacle(i)
        i--
    }
    obstacleCounter = 0
    obstacles = []
}

function start() { //Sets the start of the game
    gofito.insertGofito()

    function moveFloor() { //Move the floor to make it looks like Gofito is walking
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
        const pintaderaElement = document.querySelector('.pintadera');
        pintaderaElement.remove();
        clearGameIntervals()
        clearObstacles()
        screen2.setAttribute('class', 'hidden')
        screen4.setAttribute('class', 'wrapper game-win')
        music.pause()
        musicWin.play()
    }

    if (gofito.isDead) { //GAME OVER - clear intervales and obstacles
        gofito.win = false
        obstacleCounter = 0 //Restart the counter
        clearGameIntervals()
        clearObstacles()
        if (pintadera != undefined) {
            clearInterval(pintadera.timerId)
            mainContainer.removeChild(pintadera.sprite)

        }
        screen2.setAttribute('class', 'hidden')
        screen3.setAttribute('class', 'wrapper game-over')
        music.pause()
        musicGameOver.play()
    }
}

function createObstacle() { //Executed by intervales in the start function
    console.log(obstacles)
    if (obstacleCounter < winCondition) { //Condition: number of obstacles less than the winCondition
        const obstacle = new Obstacle(920, 369, mainContainer, obstacles, gofito)
        obstacles.push(obstacle)
        obstacle.insertObstacle()
        obstacleCounter++
    }
}

function createPintadera() {
    if (obstacleCounter === winCondition) {//When number of obstacles is equal to winCondition we create and insert the final door
        pintadera = new Pintadera(1020, 330, mainContainer, gofito)
        pintadera.insertPintadera()
        console.log(pintadera)

        clearInterval(pintaderaTimer) //Clear interval in order not to create new 'pintaderas'
    }
}
