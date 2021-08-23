const canvas = document.getElementById('art');
const ctx = canvas.getContext('2d');

function getMousePos(e) {
    const rect = canvas.getBoundingClientRect();
    return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
    };
}

function mouseMove(e) {
    const mousePos = getMousePos(e);
    ctx.lineTo(mousePos.x, mousePos.y);
    ctx.stroke();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 8;
};

canvas.addEventListener('mousedown', (e) => {
    // Éviter le comportement 'Drag & Drop' :
    e.preventDefault();
    const mousePos = getMousePos(e);
    ctx.beginPath();
    ctx.moveTo(mousePos.x, mousePos.y);

    canvas.addEventListener('mousemove', mouseMove);
    canvas.addEventListener('mouseup', () => {
        canvas.removeEventListener('mousemove', mouseMove)
    });
});

reset.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
});