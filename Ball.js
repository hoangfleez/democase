class Ball {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.canvas = document.getElementById('gamez');
        this.ctx = this.canvas.getContext('2d');
    }

    draw() {
        this.ctx.clearRect(this.x - this.radius - 2, this.y - this.radius - 1, this.radius * 2 + 4, this.radius * 2 + 2);
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        this.ctx.fillStyle = this.color
        this.ctx.fill();
    }
    // move(){
        // this.ctx.clearRect(this.x,this.y,this.canvas.width,this.canvas.height)
    // }


}
