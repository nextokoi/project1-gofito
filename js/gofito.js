function Gofito(x, y, parent){ //We create the constructor function of Gofito
    let self = this //First of all...
    this.x = x
    this.y = y
    this.width= 80
    this.height= 100
    this.floor = 364
    this.impulse = 120 //120
    this.gravity = 0.3 //0.3
    this.isDead= false
    this.win =false
    this.lives = 3
    this.invincible = false
    this.jumping = false
     this.sprite = document.createElement('div') //This element represents Gofito in the DOM

    this.insertGofito = function() { //Function to insert Gofito in the DOM
        this.sprite.setAttribute('id', 'gofito')
        this.sprite.style.left = this.x + 'px'
        this.sprite.style.top = this.y + 'px'
        parent.appendChild(this.sprite)
    }

    this.jump = function() { // Function of Gofito's movement: jumping

        if (self.impulse >= self.gravity) { //Check that Gofito's is moving up (jumping)
            self.y -= self.impulse //Decrease 'y' position to see Gofito moving up
            self.impulse *= self.gravity // We multiply by gravity to decrease the impulse at each iteration
            self.y = Math.round(self.y)
            self.sprite.style.top = self.y + 'px'; //Update the position on the screen

        } else if (self.y <= self.floor) { //Gofito is moving down. Use self.floor to check that does not go lower than the floor
            self.y += 35 //Increase 'y' position to see Gofito going down
            self.sprite.style.top = self.y + 'px'; //Update the position on the screen

        } else { //End of the jump, we reset to the initial position.
            self.y = self.floor
            self.sprite.style.top = self.y + 'px';
            self.jumping = false;
            self.impulse = 120 //120
            self.gravity = 0.3 //0.3
        }   
    }
}
export { Gofito }
