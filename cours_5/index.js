"use strict";
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


//_____________________________________________________
// Try / Catch

try {
    // Test un block de code
    maFonction();
} catch (err) {
    console.log(err);
} 

function isValidJSON(txt) {
    try {
        JSON.parse(txt);
        return true;
    } catch {
        return false;
    }
}
// console.log(isValidJSON(42));


// Finally
try {
    // Test un block de code
    maFonction2();
} catch (err) {
    console.log(err);
} finally {
    console.log('Vous êtes arrivés au bout du try-catch.');
}

// Throw
function isNumber(num) {
    if (isNaN(num)) {
        throw "Not a Number !";
    } else {
        console.log('Number !');
    }
    // Suite de code
}

try {
    isNumber('3d')
} catch (error) {
    console.log(error);
}


//_____________________________________________________
// Strict mode
// Déclarer le mode strict tout en haut du script

car = "Tesla";
console.log(car);
