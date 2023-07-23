function Obstacle(x, y, parent, array, gofito) { //We create the constructor function of Obstacle
    let self = this //First of all...
    this.x = x
    this.y = y
    this.width = 70
    this.height = 70
    this.speed = 30
    this.sprite = document.createElement('div') //This element represents the obstacles in the DOM

    this.insertObstacle = function () { //Function to instert the obstacles in the DOM
        this.sprite.classList.add('aloe')
        this.sprite.style.left = this.x + "px"
        this.sprite.style.top = this.y + "px"
        parent.appendChild(this.sprite)
    }

    this.move = function () { //Function to move the obstacles
        self.checkCollision() //First, check collisions
        self.x -= self.speed //Move to the left
        self.sprite.style.left = self.x + "px"; //Update the position on the screen

        if (self.x <= -75) { //Remove the obstacle when pass the end of the screen
            self.removeObstacle()
        }
    }

    this.removeObstacle = function (index) { //Function to remove them

        clearInterval(this.timerId) //Stop the interval that moves the obstacles

        if (this.x < -75) { //Delete the obstacles that are out of the screen
            array.shift()
        } else {
            array.splice(index, 1) //Delete the obstacles that are in the screen
        }
        parent.removeChild(this.sprite) //Remove from the DOM so we don't see them
    }


    this.checkCollision = function () { //Function to check collisions
        if (this.x <= gofito.x + gofito.width &&
            this.x + this.width >= gofito.x &&
            this.y <= gofito.y + gofito.height &&
            this.y + this.height >= gofito.y
        ) {
            gofito.isDead = true //Gofito dies when collides with the obstacles
        }
    }

    this.timerId = setInterval(this.move, 100);//Interval to move the obstacles
}

export { Obstacle }