function Obstacle(x, y, parent, array){
    let self = this
    this.x = x
    this.y = y
    this.speed = 30
    this.sprite = document.createElement('div')

    this.insertObstacle = function (){
        this.sprite.classList.add('aloe')
        this.sprite.style.left = this.x + "px"
        this.sprite.style.top = this.y + "px"
        parent.appendChild(this.sprite)
    }

    this.move = function(){
        self.x -= self.speed
        self.sprite.style.left = self.x + "px";

        if(self.x <= -75){
            self.removeObstacle()
        } 
    }

    this.removeObstacle = function(index){
        if(this.x < -75){
            array.shift()
        } else {
            array.splice(index, 1)
        }
        parent.removeChild(this.sprite)
        clearInterval(this.timerId)
    }
    
    this.timerId = setInterval(this.move, 100);
}

export { Obstacle }
