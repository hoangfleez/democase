let canvas = document.getElementById('gamez');
let ctx = canvas.getContext('2d');
// Bóng và sự kiện của bóng
let ball = new Ball(20, 20, 20, 'red');

let dx = 2, dy = 1;
let radius = 20;
let score = document.getElementById("scores");
let point = 0
function BallvsCanvas() {
    if (ball.x < radius || ball.x + radius >= canvas.height) {
        dx = -dx;
    }
    if (ball.y < radius) {
        dy = -dy;
    } else if (ball.y + radius === canvas.width) {
        alert("GAME OVER!!");
ctx.clearRect(ball.x-20, ball.y-20, 40,40)
        ball.x=20
        ball.y=20;
       score.innerHTML = "Score: 0";
       // Score();
    }
}


// Hình chữ nhật đỡ bóng và sự kiện

let bar = new Bar(200, 480, 80, 20, "black", 20);


document.addEventListener('keydown', function (event) {
    bar.move()
    bar.draw()
    if (event.keyCode === 37 && bar.x >= 0) {
        bar.x -= bar.speed
    } else if (event.keyCode === 39 && bar.x <= 430) {
        bar.x += bar.speed
    }
});


function BallvsBar() {
    if (ball.x + radius >= bar.x && ball.x <= bar.x + bar.width && ball.y + radius >= canvas.height - bar.height) {
        dy = -dy
    }
}

function Score(){
    if(ball.x + radius >= bar.x && ball.x <= bar.x + bar.width && ball.y + radius >= canvas.height - bar.height){
        point += 1
        score.innerHTML = `Score: ${point}`
    }
}

function main() {
    ball.x += dx;
    ball.y += dy;
    ball.draw();
    bar.draw();
    BallvsCanvas();
    BallvsBar();
    Score();
    requestAnimationFrame(main)

}

main();

