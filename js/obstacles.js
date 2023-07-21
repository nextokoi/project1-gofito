function Obstacle(x, y, parent, array, gofito) {
    let self = this
    this.x = x
    this.y = y
    this.width = 74
    this.height = 74
    this.speed = 30
    this.sprite = document.createElement('div')

    this.insertObstacle = function () {
        this.sprite.classList.add('aloe')
        this.sprite.style.left = this.x + "px"
        this.sprite.style.top = this.y + "px"
        parent.appendChild(this.sprite)
    }

    this.move = function () {
        self.checkCollision()
        self.x -= self.speed
        console.log('me muevo')
        self.sprite.style.left = self.x + "px";

        if (self.x <= -75) {
            self.removeObstacle()
        }
    }

    this.removeObstacle = function (index) {
        clearInterval(this.timerId) //Cambios
        if (this.x < -75) {
            array.shift()
        } else {
            array.splice(index, 1)
        }
        parent.removeChild(this.sprite)
    }

    this.checkCollision = function () {
        if (this.x <= gofito.x + gofito.width &&
            this.x + this.width >= gofito.x &&
            this.y <= gofito.y + gofito.height &&
            this.y + this.height >= gofito.y
        ) {
            gofito.isDead = true            
        }
    }

    this.timerId = setInterval(this.move, 100);
}

export { Obstacle }