class Ball {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.dx = (Math.random() * 3) + 1;
        this.dy = (Math.random() * 4) + 2;
        this.canvas = document.getElementById('gamez');
        this.ctx = this.canvas.getContext('2d');
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        this.ctx.fillStyle = this.color
        this.ctx.fill();
    }

    move() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.x += this.dx;
        this.y += this.dy;
    }
    // bóng va vs tường
    BallvsCanvas() {
        if (this.x < this.radius || this.x + this.radius >= this.canvas.height) {
            this.dx = -this.dx;
        }
        if (this.y < this.radius) {
            this.dy = -this.dy;
        } else if (this.y + this.radius > this.canvas.width) {
            alert("GAME OVER!!");
            ctx.clearRect(this.x - this.radius, this.y - this.radius, 40, 40)
            this.x = this.radius;
            this.y = this.radius;
            point = 0;
            score.innerHTML = "Score: 0";
            Score();
        }
    }

}
