function Pintadera(x, y, parent, gofito) { //We create the constructor function of Pintadera
    let self = this //First of all...
    this.x = x
    this.y = y
    this.width = 150
    this.height = 150
    this.speed = 18
    this.sprite = document.createElement('div') //This element represents the 'pintadera' in the DOM

    this.insertPintadera = function () { //Function to instert the 'pintadera'
        self.sprite.classList.add('pintadera')
        self.sprite.style.left = self.x + "px"
        self.sprite.style.top = self.y + "px"
        parent.appendChild(self.sprite)
    }

    this.movePintadera = function () { //Function to move it, just like obstacles
        self.checkCollisionWin()
        self.x -= self.speed
        self.sprite.style.left = self.x + "px";
    }

    this.checkCollisionWin = function () { //Function to check collisions, just like obstacles
        if (self.x <= gofito.x + gofito.width &&
            self.x + self.width >= gofito.x &&
            self.y <= gofito.y + gofito.height &&
            self.y + self.height >= gofito.y
        ) {
            gofito.win = true
        }
    }
    self.timerId = setInterval(self.movePintadera, 100); //Interval to move the 'pintadera'

}

export { Pintadera }