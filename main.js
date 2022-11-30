let canvas = document.getElementById('gamez');
let ctx = canvas.getContext('2d');
// Bóng và sự kiện của bóng
let ball = new Ball(20, 20, 20, 'red');

let dx = 2, dy = 1;
let radius = 20;

function ballvscanvas() {
    if (ball.x < radius || ball.x + radius >= 500) {
        dx = -dx;
    }
    if (ball.y < radius) {
        dy = -dy;
    } else if (ball.y == canvas.height) {
        alert("GAME OVER!!")
    }
}


// setInterval(function () {
//     // ctx.clearRect(0,0,ball.width, ball.height)
//     ball.x += dx;
//     ball.y += dy;
//     ball.draw();
//     bongvavaocanvas();
// }, 30)


// Hình chữ nhật đỡ bóng và sự kiện

let bar = new Bar(200, 480, 70, 20, "black", 20);


document.addEventListener('keydown', function (event) {
    bar.move()
    bar.draw()
    if (event.keyCode === 37 && bar.x >= 0) {
        bar.x -= bar.speed
    } else if (event.keyCode === 39 && bar.x <= 430) {
        bar.x += bar.speed
    }
});


function ballvsbar() {
    if (ball.x + radius >= bar.x && ball.x <= bar.x + bar.width && ball.y + radius >= canvas.height - bar.height) {
        dy = -dy
    }
}



function main() {
    ball.x += dx;
    ball.y += dy;
    ball.draw();
    bar.draw();
    ballvscanvas();
    ballvsbar();
    requestAnimationFrame(main)

}

main();

