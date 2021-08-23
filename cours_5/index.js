// Canvas

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function draw() {
 
    ctx.fillStyle = "rgb(200, 0, 0)";
    ctx.fillRect(10, 10, 50, 50);
    
    ctx.fillStyle = "rgb(0, 100, 200, 0.5)";
    ctx.fillRect(30, 30, 100, 50);
    
    ctx.fillStyle = "rgba(100, 100, 200, 0.5)";
    ctx.fillRect(10, 25, 100, 100);
    ctx.clearRect(15, 25, 40, 40);
    ctx.strokeRect(125, 75, 50, 50);
    
    ctx.fillStyle = "rgba(200, 100, 200, 0.5)";
    ctx.beginPath();
    ctx.moveTo(180, 150);
    ctx.lineTo(100, 75);
    ctx.lineTo(100, 150);
    ctx.fill();

}

window.addEventListener('load', draw());