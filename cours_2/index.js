// Rappel des types de données :
// Pour connaitre le type d'un objet on peut utiliser "typeof"
let string = 'Chaine';
let number = 27;
let boolean = true;
let undifinedVariable; 

//____________________________________________________________
// Tableaux 
let array  = ['Nantes', 'Meaux', 'Sens', 'Évian'];
// console.log(array[O][3]);

let array2 = ['Paris', 24, true, [1, 2], { name : 'Mitsu'}];
// console.log(array2[4].name);

//____________________________________________________________
// Objets
let objet = {
    pseudo : 'Mitsu',
    age : 3,
    technos : ['JavaScript', 'React', 'PHP'],
    admin : false
};
// console.log(objet.technos[0][4]);

objet.adresse ='22 rue de la banane';
// console.log(objet);

let data = [
    {
        pseudo : 'Mitsu',
        age : 3,
        technos : ['JavaScript', 'React', 'Node'],
        admin : true
    },
    {
        pseudo : 'Orion',
        age : 3,
        technos : ['JavaScript', 'Angular', 'PHP'],
        admin : false
    },
    {
        pseudo : 'Wicca',
        age : 1,
        technos : ['JavaScript', 'Vue', 'Python'],
        admin : false
    }
];
// console.log(data[2].pseudo[0]);

//____________________________________________________________
// Les structures de contrôle

// If - Else
// if (data[0].age > data[1].age) {
    // console.log(data[0].pseudo + ' est plus agé que ' + data[1].pseudo);
// } else {
    // Valeur si faux
// }
// En ternaire 
// valeur à tester ? si vrai : si faux

// While
// let w = 0;

// while (w < 10) {
//     w++;
//     console.log('La valeur de w est de : ' + w);
// }

// Do while
// let d = 0;

// do {
//     d++;
//     console.log(d);
// } while (d < 5);

// Les boucles for
// for (const user of data) {
//     document.body.innerHTML += `<li>${user.pseudo} - ${user.age} ans</li>`
// }

// On déclare la valeur de 'i' | jusqu'où on boucle | évolution de 'i' si la condition 2 n'est pas remplie
// for (i = 0 ; i < data.length; i++) {
//     // console.log(data[i].technos[0]);
//     document.body.innerHTML += '<h2>' + data[i].technos.join(' / ') + '</h2>';
// }

// Switch
// document.body.addEventListener('click', (e) => {
//     switch (e.target.id) {
//         case 'javascript':
//             document.body.style.background = 'yellow';
//             break;
//         case 'php' :
//             document.body.style.background = 'purple';
//             break;
//         case 'python' :
//             document.body.style.background = 'blue';
//             break;
//         default:
//             null;
//             break;
//     }
// });

//____________________________________________________________
// Méthodes String :
let string2 = 'JavaScript est un langage orienté objet';

// parseInt() permet de transformer une string en number
// eval() permet de concaténer des informations
console.log(eval(parseInt('1') + 2));

console.log(string2[string2.length -1]);

// indexOf() retourne -1 si il ne connait pas
console.log(string2.indexOf('n'));

// slice() permet de couper l'élément à la longueur désirée
// let newString = string2.slice(2);
// Si deux paramètres sont données, slice() renverra ce qui est contenu entre ces deux chiffres
let newString = string2.slice(5, 17);

// split() permet de découper à l'endroit indiqué et renvoie un array
console.log(string2.split('i'));

// toLowerCase() et toUpperCase() permettent de tout passer en minuscule ou majuscule
console.log(string2.toUpperCase());

// replace() permet de remplacer un élément par un autre
console.log(string2.replace('JavaScript', 'PHP'));

//____________________________________________________________
// Méthodes Numbers :

let number2 = 42.33232424;
let numberString = '3.666 est un chiffre';

// toFixed() permet de ne garder qu'une certaine suite de nombre après une virgule
console.log(number2.toFixed(2));

// parseInt() peut aussi extraire les chiffres d'une string mais ne garde par les chiffres après la virgule
console.log(parseInt(numberString));

// parseFloat() comme parseInt() mais conserve les chiffres après la virgule
console.log(parseFloat(numberString));

// Math
// console.log(Math.PI);
// console.log(Math.round(4.9));
// console.log(Math.flour(4.9));
// console.log(Math.ceil(4.9));
// console.log(Math.pow(2, 7));
// console.log(Math.sqrt(16));

// console.log(Math.floor(Math.random() * 50));

//____________________________________________________________
// Méthodes Arrays :
let array3 = ['JavaScript', 'React', 'Angular', 'TypeScript'];
let array4 = ['Node', 'Python', 'PHP'];

// ... spread operator
let newArray = [...array3, ...array4];
// console.log(newArray);

// console.log(array3.join(' '));
// console.log(array3.slice(1, 3));
// console.log(array4.indexOf('Python')); 
// array3.forEach((languages) => console.log(languages)); 

// Pour s'assurer que tous les résultats sont idendiques, on utilise every()
// console.log(array3.every((language) => language == 'React'));
// Pour vérifier que le résultat existe bien, on utilise some() 
// console.log(array3.some((language) => language == 'React'));

// Pour casser un tableau en retirant le premier élément, on utilise shift :
// let shift = array3.shift();
// console.log(array3);
// Pour retirer le dernier élément, on utilise pop() :
// array3.pop();
// console.log(array3);

// Pour remplacer une valeur, on utilise splice() :
const restArray = array3.splice(0, 1, "Vue");
// console.log(array3);

// IMPORTANT // 
let arrayNumber = [4, 74, 28, 13, 3];

// Pour additionner des résultats/des tableaux, on utilise reduce() :
console.log(arrayNumber.reduce((x, y) => x + y));

// Pour ajouter des données, on utilise push() :
arrayNumber.push(666);
console.log(arrayNumber);

// FILTER, SORT, MAP

// Filter() permet de 'filtrer' des données d'un tableau.
// Sort() permet de trier des objets et des tableaux.
// Map() permet de lister/mapper (un peu comme un forEach en plus puissant)

// EXEMPLE : pour garder les chiffres suppérieurs à 10 :
// console.log(arrayNumber.filter((number) => number > 10));

// EXEMPLE : pour classer par ordre croissant : 
// console.log(arrayNumber.sort((a, b) => a - b));
// EXEMPLE : pour classer par ordre décroissant : 
// console.log(arrayNumber.sort((a, b) => b - a));

// document.body.innerHTML = arrayNumber
//     .map((number) => `<li>${number}</li>`)
//     .join('');


//____________________________________________________________
// Méthodes Objects :

// EXEMPLE : pour classer des utilisateurs par âge :
// document.body.innerHTML = data
//     .filter((user) => user.admin === false)
//     .filter((user) => user.pseudo.includes('i'))
//     .sort((a, b) => a.age - b.age)
//     .map((user) => 
//         `
//             <div class="user-card">
//                 <h2>${user.pseudo}</h2>
//                 <p>Age : ${user.age} ans</p>
//                 <p>Status : ${user.admin ? 'Administrateur' : 'Membre'}</p>
//             </div>
//         `
//     )
//     .join('');


//____________________________________________________________
// Les dates :

// Date classique :
let date = new Date();

// Timestamp (temps écoulé entre le premier janvier 1970 et maintenant, en millisecondes) :
let timestamp = Date.parse(date);

// IsoString :
let iso = date.toISOString();

function dateParser(chaine) {
    let newDate = new Date(chaine).toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
    });
    return newDate;
}

// console.log(dateParser(date));
// console.log(dateParser(timestamp));
// console.log(dateParser(iso));


//____________________________________________________________
// Le destructuring :
let moreData = {
    destVar: ['Element 1', 'Element 2']
}

// const destVar = moreData.destVar >>>>> façon plus rapide :
const { destVar } = moreData;

console.log(moreData.destVar[0]);
console.log(destVar);

// Pour destructurer un tableau, les variables définies prendront les valeurs dans l'ordre du tableau
let array5 = [13, 80, 42];
let [x, y, z] = array5;

// console.log(iso);

const dateDestructuring = (chaine) => {
    let newDate = chaine.split('T')[0];
    let [y, m, d] = newDate.split('-');
    return [d, m, y].join('/')
}

console.log(dateDestructuring(iso));


//____________________________________________________________
// Les Datasets :

const h3js = document.getElementById('javascript');
// console.log(h3js.dataset.lang);

const h3 = document.querySelectorAll('h3');

h3.forEach((language) => console.log(language.dataset));