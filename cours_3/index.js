// XMLHttpRequest : 

function reqListener() {
    console.log(this.responseText);
}

let req = new XMLHttpRequest();
req.onload = reqListener;
// req.open('get', 'data.txt', true);
// req.open('get', 'data.json', true);
// req.open("get", "https://api.blablagues.net/?rub=blagues", true);
// req.send();

//___________________________________________________
// Méthode fetch :

// Exemple de construction d'un fetch :
// fetch("mon url", "objet d'options éventuels").then((response) => {
//     // response
// })
//.catch((err) => console.log(err));

fetch('data.txt')
    .then((res) => res.text())
    // .then((data) => console.log(data));

fetch('data.json')
    .then((res) => res.json())
    // .then((data) => console.log(data));


//___________________________________________________
// Méthode GET :

const myHeaders = new Headers();

const init = {
    method: "GET",
    headers: myHeaders,
    mode: "cors",
    cache: "default"
};

// fetch("data.json", init).then((res) => console.log(res));

// CRUD = > Create (POST), Read (GET), Update (PUT), Delete (DELETE)

const init2 = {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        pseudo: "Mitsu",
        message: "Woaf woaf !"
    }),
    mode: "cors",
    credentials: "same-origin"
};

document.querySelector("form").addEventListener("submit", () => {
    fetch("http://localhost:3000/posts", init2)
        .then(() => console.log('data envoyée'));
})


//___________________________________________________
// Asynchrone :

setTimeout(() => {
    // console.log('test');
}, 2000);

// Promise -> ne sera executé que lorsque l'on aura un retour des données
// fetch('monLien').then((res) => res)

// Async/Await :

// Cas fonction classique
async function fetchData() {
    // attend que le await soit executé avant de passer à la suite
    await fetch('monLien')

    executeUneFunction();
}

// Cas fonction fléchée
const fetchData2 = async () => {
    await fetch('monLien')

    executeUneFunction();
}


//___________________________________________________
// JSON :

// Méthode .json() -> méthode qui s'auto-résoult en renvoyant le Body de la requête. On la retrouve parfois dans les fetch :
fetch("data.json")
    .then((res) => res.json())
    .then((data) => {
        // stringify() -> convertit en JSON
        let settings = JSON.stringify(data);

        // parse() -> transforme json en objet JS
        console.log(JSON.parse(settings));
    })
;


//___________________________________________________
// Web API :

// Client storage => 
// Local storage
localStorage.data = "Je stock la data";
// document.body.textContent = localStorage.data;

localStorage.removeItem("data");

const obj = {
    name: "Mitsu",
    age: 3
}

// Il faut passer des chaines de caractrères dans le localStorage
localStorage.user = JSON.stringify(obj);
console.log(JSON.parse(localStorage.user));


// Session storage =>
// sessionStorage.dataSettings = "55px";
// console.log(sessionStorage.dataSettings);

// Pour nettoyer le session Storage, on utilise clear() :
sessionStorage.clear();


//___________________________________________________
// Les cookies :
document.cookie = "username=Mitsu";

// Bonne pratique pour les cookies :
document.cookie = "pseudo=Mimi;path=/; max-age=4500000; secure; samesite";