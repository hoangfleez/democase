let canvas = document.getElementById('gamez');
let ctx = canvas.getContext('2d');
// Bóng và sự kiện của bóng
let ball = new Ball(Math.random()*500, 20, 20, 'red');


let score = document.getElementById("scores");
let point = 0


// SK bar đỡ bóng
function BallvsBar() {
    if (ball.x + ball.radius >= bar.x && ball.x <= bar.x + bar.width && ball.y + ball.radius >= canvas.height - bar.height) {
        ball.dy = -ball.dy
    }
}


// Hình chữ nhật đỡ bóng và sự kiện
let bar = new Bar(200, 480, 80, 20, "black", 20);

document.addEventListener('keydown', function (event) {
    if (event.keyCode === 37 && bar.x >= 20) {
        bar.x -= bar.speed
        bar.moveClear()
    } else if (event.keyCode === 39 && bar.x <= 400) {
        bar.x += bar.speed
        bar.moveClear()
    }
})


// Tính điểm
function Score() {
    if (ball.x + ball.radius > bar.x && ball.x <= bar.x + bar.width && ball.y + ball.radius >= canvas.height - bar.height) {
        point += 1
        score.innerHTML = `Score: ${point}`
    }
}

let ball1 = new Ball(Math.random()*500, 20, 20, 'blue');
function Replication(){
    if(point>1){
        ball1.move();
        ball.draw()

        ball1.draw()
        ball.draw()
        bar.draw()
    }
}


// Main chạy
function main() {
    ball.move();
    ball.draw();
    bar.draw();
    Replication()
    ball.BallvsCanvas();
    BallvsBar();
    Score();
    requestAnimationFrame(main)
}
main();

