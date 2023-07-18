function Gofito(x, y, parent){
    let self = this
    this.x = x
    this.y = y
    this.floor = 210
    this.timerJump = timerJump
    this.impulse = 100
    this.gravity = 0.3
    this.jumping = false
    this.sprite = document.createElement('div')

    this.insertGofito = function() {
        this.sprite.setAttribute('id', 'gofito')
        this.sprite.style.left = this.x + 'px'
        this.sprite.style.top = this.y + 'px'
        parent.appendChild(this.sprite)
    }
    this.jump = function() {
        if (self.jumping && self.impulse >= 0.25) {
            self.y -= self.impulse
            self.impulse *= self.gravity
            self.sprite.style.top = self.y + 'px';
        } else if (self.y <= suelo) {
            self.y += 30
            console.log ("Estoy bajando!")
            self.sprite.style.top = self.y + 'px';
        } else {
            self.impulse = 100
            self.gravity = 0.3
            self.y = self.floor
            clearInterval(self.timerJump)
            self.jumping = !self.jumping
        }
       
    }
}
export { Gofito }