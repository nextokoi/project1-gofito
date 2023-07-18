function Obstacles(x, y, parent, gofito){
    let self = this
    this.x = x
    this.y = y
    this.speed = 10
    this.sprite = document.createElement('div')

    this.insertObstacles = function (){
        this.sprite.classList.add('aloe')
        this.sprite.style.left = this.x + "px"
        this.sprite.style.top = this.y + "px"
        parent.appendChild(this.sprite)
    }
}

export { Obstacles }