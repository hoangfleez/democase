class Bar {
    constructor(x, y, width, height, color, speed) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.speed = speed;
        this.canvas = document.getElementById('gamez');
        this.ctx = this.canvas.getContext('2d');
    }
    moveClear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        // this.x -= 10;
    }

    draw(){
        this.ctx.beginPath();
        this.ctx.fillStyle = this.color
        this.ctx.rect(this.x, this.y, this.width, this.height,this.speed);
        this.ctx.fill();
    }

}
