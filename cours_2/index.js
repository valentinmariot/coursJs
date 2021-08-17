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
let w = 0;

while (w < 10) {
    w++;
    console.log('La valeur de w est de : ' + w);
}

// Do while
let d = 0;

do {
    d++;
    console.log(d);
} while (d < 5);

// Les boucles for
// for (const user of data) {
//     document.body.innerHTML += `<li>${user.pseudo} - ${user.age} ans</li>`
// }

// On déclare la valeur de 'i' | jusqu'où on boucle | évolution de 'i' si la condition 2 n'est pas remplie
for (i = 0 ; i < data.length; i++) {
    // console.log(data[i].technos[0]);
    document.body.innerHTML += '<h2>' + data[i].technos.join(' / ') + '</h2>';
}

// Switch
document.body.addEventListener('click', (e) => {
    switch (e.target.id) {
        case 'javascript':
            document.body.style.background = 'yellow';
            break;
        case 'php' :
            document.body.style.background = 'purple';
            break;
        case 'python' :
            document.body.style.background = 'blue';
            break;
        default:
            null;
            break;
    }
});

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



//