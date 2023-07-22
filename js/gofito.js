function Gofito(x, y, parent){
    let self = this
    this.x = x
    this.y = y
    this.width= 84
    this.height= 84;
    this.floor = 380
    this.impulse = 120
    this.gravity = 0.3
    this.isDead= false
    this.win =false
    this.jumping = false
    this.sprite = document.createElement('div')

    this.insertGofito = function() {
        this.sprite.setAttribute('id', 'gofito')
        this.sprite.style.left = this.x + 'px'
        this.sprite.style.top = this.y + 'px'
        parent.appendChild(this.sprite)
    }
    this.jump = function() {
        if (self.impulse >= self.gravity) {
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
            self.jumping = false;
            self.impulse = 120
            self.gravity = 0.3
        }   
    }
}
export { Gofito }
