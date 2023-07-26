function Obstacle(x, y, parent, array, gofito) { //We create the constructor function of Obstacle
    let self = this //First of all...
    this.x = x
    this.y = y
    this.width = 65
    this.height = 95
    this.speed = 26
    this.sprite = document.createElement('div') //This element represents the obstacles in the DOM

    this.insertObstacle = function () { //Function to instert the obstacles in the DOM
        this.sprite.classList.add('tunera')
        this.sprite.style.left = this.x + "px"
        this.sprite.style.top = this.y + "px"
        parent.appendChild(this.sprite)
    }

    this.move = function () { //Function to move the obstacles
        self.checkCollision() //First, check collisions
        self.x -= self.speed //Move to the left
        self.sprite.style.left = self.x + "px"; //Update the position on the screen

        if (self.x <= -75) { //Remove the obstacle when pass the end of the screen
            self.removeObstacle(0)
        }
    }

    this.removeObstacle = function (index) { //Function to remove them

        clearInterval(this.timerId) //Stop the interval that moves the obstacles
        array.splice(index, 1) //Remove from array
        parent.removeChild(this.sprite) //Remove from the DOM so we don't see them
    }

    this.checkCollision = function () { //Function to check collisions

        if (this.x <= gofito.x + gofito.width &&
            this.x + this.width >= gofito.x &&
            this.y <= gofito.y + gofito.height &&
            this.y + this.height >= gofito.y 
        
        ) {
            if (gofito.lives > 1 && gofito.invincible === false)  { //Gofito loses a life with every collision
                gofito.lives --
                gofito.removeHearts() 
                gofito.invincible = true
                setTimeout(function(){ //To pass the obstacle it has already collided with
                    gofito.invincible= false
                },2000)

            } else if (gofito.invincible === false){ //Gofito dies when collides 
                gofito.isDead = true 
            }
            console.log(gofito.lives)

        }
    }

    this.timerId = setInterval(this.move, 100);//Interval to move the obstacles
}

export { Obstacle }