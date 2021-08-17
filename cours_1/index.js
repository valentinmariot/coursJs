// Selecteurs
const h4 = document.querySelector('h4');
const askContainer = document.querySelector('.click-event');
const mousemove = document.querySelector('.mousemove');

askContainer.addEventListener('click', () => {
    askContainer.classList.toggle('ask-clicked');
});
// console.log(mousemove);
window.addEventListener('mousemove', (e) => {
    mousemove.style.left = e.pageX + "px";
    mousemove.style.top = e.pageY + "px";

});

window.addEventListener('mousedown', (e) => {
    mousemove.style.transform = 'scale(2) translate(-25%, -25%)';
});

window.addEventListener('mouseup', (e) => {
    mousemove.style.transform = 'scale(1) translate(-50%, -50%)';
    mousemove.style.border = '2px solid teal';
});

askContainer.addEventListener('mouseenter', () => {
    console.log('mouseenter');
    askContainer.style.background = "rgba(0, 0, 0, 0.6)";
});

askContainer.addEventListener('mouseout', () => {
    console.log('mouseout');
    askContainer.style.background = "pink";
});

askContainer.addEventListener('mouseover', () => {
    console.log('mouseover');
    askContainer.style.transform = "rotate(2deg)";
});

//_____________________________________________________
// KeyPress event

const keypressContainer = document.querySelector('.keypress');
const key = document.getElementById('key');
const ring = (key) => {
    const audio = new Audio();
    audio.src = "../supports/" + key + ".mp3";
    audio.play();
}


document.addEventListener('keypress', (e) => {
    key.textContent = e.key;
    if (e.key === 'p'){
        keypressContainer.style.background = 'pink';
    } else if (e.key === 't'){
        keypressContainer.style.background = 'teal';
    } else {
        keypressContainer.style.background = 'red';
    }

    ring(e.key);
});

//_______________________________________________________
// Scroll Event

const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    console.log(window.scrollY);
    if (window.scrollY > 120) {
        nav.style.top = 0;
    } else {
        nav.style.top = "-50px";
    }
});

//________________________________________________________
// Form Event
const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector('select');
const form =  document.querySelector('form');

let pseudo = '';
let language = '';

inputName.addEventListener('input', (e) => {
    pseudo = e.target.value;
})

select.addEventListener('input', (e) => {
    language = e.target.value;
})

form.addEventListener('submit', (e) => {
    e.preventDefault(); //Annule le changement de page
    if ( cgv.checked ) {
        document.querySelector('form > div').innerHTML = `
            <h3>Pseudo : ${pseudo}</h3>
            <h4>Langage : ${language}</h4>
        `;
    } else {
        alert('Veuillez valider les CGV');
    }
})

//_________________________________________________________
//Load Event

window.addEventListener('load', () => {
    console.log('document chargé');
})

//_________________________________________________________
//foreach

// const boxes = document.getElementsByClassName('box');
const boxes = document.querySelectorAll('.box');

boxes.forEach((box) => {
    box.addEventListener('click', (e) => {
        e.target.style.transform = "scale(0.7)";
    })
});

//___________________________________________________
// addEventListener VS onclick

// document.body.onclick = () => {
//     console.log('Click !');
// };


// Bubbling => fin (initialement, l'eventlintener est paramétré en mode Bubbling). Le troisième argument est par défaut sur 'false'
document.body.addEventListener('click', () =>  {
    console.log('click 1');
}, false);

// Usecapture 
document.body.addEventListener('click', () =>  {
    console.log('click 2');
}, true);

//____________________________________________________
// stopPropagation

askContainer.addEventListener('click', () => {
    alert('test');
    e.stopPropagation();
})
// Voir aussi -> removeEventListener

//____________________________________________________
// BOM

// window.open('http://google.com', 'cours js', 'height=600, width=800')
// window.close()

// Évènements adossés à Window
//alert('hello');

// // confirm
// btn2.addEventListener('click', () => {
//     confirm('Voulez vous vraiment vous tromper ?')
// })

// // prompt
// let answer = '';
// btn1.addEventListener('click', () => {
//    let answer = prompt('Entrez votre nom !')

//    askContainer.innerHTML += "<h3>Bravo " + answer + "</h3>";
// })

// // Timer like :
// setTimeout(() => {
//     askContainer.style.borderRadius = "300px";
// }, 2000);

// let interval =setInterval(() => {
//     document.body.innerHTML += `
//         <div class="box">
//             <h2>New box every sec</h2>
//         </div>
//     `;
// }, 100000);

// document.body.addEventListener('click', (e) => {
//     e.target.remove();
//     clearInterval(interval);
// })

// Location
console.log(location.href);
console.log(location.host);
console.log(location.pathname);
console.log(location.search);
// location.replace('http://google.com')

// window.onload = () => {
//     location.href = 'http://google.com'
// }

// Navigator
console.log(navigator.userAgent);

// History
// console.log(history);
// window.history.back();
// history.go(-2);

//________________________________________________
// setProperty
window.addEventListener('mousemove', (e) => {
    nav.style.setProperty('--x', e.layerX + "px")
    nav.style.setProperty('--y', e.layerY + "px")
}) 

