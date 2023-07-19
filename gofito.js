function Gofito(x, y, parent, timerJump){
    let self = this
    this.x = x
    this.y = y
    this.floor = 210
    this.timerJump = timerJump
    this.impulse = 120
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
        if (self.jumping && self.impulse >= self.gravity) {
            self.y -= self.impulse
            self.impulse *= self.gravity
            self.y = Math.round(self.y)
            self.sprite.style.top = self.y + 'px';
        } else if (self.y <= self.floor) {
            self.y += 35
            self.sprite.style.top = self.y + 'px';
        } else {
            self.y = self.floor
            self.sprite.style.top = self.y + 'px';
            self.impulse = 120
            self.gravity = 0.3
            clearInterval(self.timerJump)
            self.jumping = !self.jumping
        }   
    }
}
export { Gofito }
