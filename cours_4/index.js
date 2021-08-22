const obj = {
    // index: "value"
    firstname: "Tanjiro",
    lastname: "Kamado",
    wapon: "katana",
    admin: false,

    // sayHello() {
    //     console.log("Hello ! My name is " + this.firstname);
    // }
    
    sayHello: function() {
            console.log("Hello ! My name is " + this.firstname);
    }
} 

// Ajouter
obj.age = 15
obj["wind"] = "fire"

// Modifier
obj.firstname = "Nezuko"
obj["admin"] = true

// Supprimer
delete obj.wapon

// Checker si propriété existe 
// console.log("firstname" in obj);
// console.log("village" in obj);

// Parcourir un objet
for (const key in obj) {
    console.log(key + " : " + obj[key]);
}

// console.log(obj.sayHello());


//______________________________________
// Méthodes natives :

// Obtenir les clés :
const keys = Object.keys(obj)
console.log(keys);

// Obtenir les valeurs :
const values = Object.values(obj)
console.log(values);

// Créer un nouveau tableau :
const nastedArray = Object.entries(obj)
console.log(nastedArray);

// Fusionner des objets :
const obj2 = {
    height: "165 cm",
    weight: "61 kg"
}

const fusion = Object.assign({}, obj, obj2);
console.log(fusion);

// Empêcher les modifications :
// const newObj = Object.freeze(obj);
const newObj = Object.seal(obj);
newObj.firstname = "Inozuke"
newObj.hairColor = "Black to red"
console.log(newObj);

//_____________________________________________
// Construire des objets :

// Fonction constructeur :
function User(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;

    this.getName = function () {
        console.log("My name's " + this.firstname + " " + this.lastname + " !");
    }
}

const user1  = new User("Inosuke", "Hashibira")
console.log(user1.getName());


// Factory functions :
function User3(pseudo, city) {
    return {
        pseudo,
        city
    }
}

const user4 = User3("Oliver", "Sheffield")
console.log(user4);


//_____________________________________________
// Class :
// Afin d'éviter les erreurs, il est recommandé de limiter l'utilisation des fonctions fléchées en POO
class Student {
    constructor(name, city) {
        this.name = name;
        this.city = city;
    }
    
    sayMyName = function() {
        console.log("Hello, my name's " + this.name);
    }
}

const user5 = new Student("Jordan", "London")

Student.prototype.from = function () {
    console.log("From " + this.city);
}
console.log(user5.from());

Object.assign(Student.prototype, {
    method1() { /*...*/ },
method2() { /*...*/ },
})


//_____________________________________________
// L'héritage :

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    saySomething(text) {
        console.log(this.name + " say : " + text);
    }
}

class Dog extends Animal {
    run() {
        console.log('Faster !!');
    }
}

const mitsu = new Dog("Mitsu", 3)
console.log(mitsu);