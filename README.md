# Cours JavaScript réalisés par FromScrath 

Afin de renforcer mon niveau en JavaScript, je forge mes compétences à l'aide d'une série de vidéos YouTube disponible à cette adresse : 
__http://shorturl.at/xzC29__

## Chapitre 1 : Les bases    

• Qu'est-ce que JavaScript ?       
• La syntaxe    
• Les variables    
• La concaténation    
• Les types de données    
• Les opérateurs / opérateurs d'affectation /etc  
• Les fonctions    
• La portée des variables      
• Mise en application à l'aide d'un projet 'Calculatrice'   


### Qu'est-ce que JavaScript ?   

• " JavaScript est un langage de script multiplateformes et orienté objets. C'est un langage léger qui doit faire partie d'un environement 'Orienté Objet' (browsers) pour qu'il puisse être utilisé sur les objets de cet environnement. " (MDN)

### La syntaxe :   

• Les points-virgules ne sont pas obligatoires en JS mais il conseillé de les utiliser.     
• JavaScript étant sensible à la casse, il est recommandé, pour bonne pratique, d'utiliser la notion "Camel Case".    

### Les variables :   

• 'var' a été remplacé par 'const' et 'let'.   
• Une variable immuable sera appelée une constante 'const' (ex : un prénom).    
• Une variable qui sera amenée à être modifiée sera appelée 'let'.    

### La concaténation :    

• Pour concaténer un résultat avec une variable, on peut utiliser le '+' suivi du nom de la variable.   
• Si une chaine de caractères doit contenir une variable, on utilisera des backticks pour englober le tout afin d'appeler la variable à l'aide de ${nomVariable} au sein de cette chaine.      

### Les types de données :   

• String (chaine de caractères)  : sera comprise entre single quote, double quote ou backtick,      
• Number (chiffre) : sera écrit sans quoites autour de lui,     
• Boolean (binaire) : la réponse sera 'vraie' ou 'faux', '0' ou '1', 'oui' ou 'non', etc,     
• Array (tableau) : son contenu sera défini entre [brackets] et peut contenir plusieurs informations de différents types (string, number, boolean),    
• Object (objet) : son contenu sera défini entre {braces} et peut contenir plusieurs informations organisé à l'aide d'indexes et de valeurs, de différents types (string, number, boolean).     
• NULL : variable dont la valeur/le type ne vaut rien,      
• Undefined : pas définit. 


••• TIPS •••    
• Pour connaitre le type d'une donnée, on peut utiliser la fonction ```console.log(typeof ...);```     
• Un array et une variable null seront considérés comme des objets.     

### Les opérateurs / opérateurs d'affectation :    

#### Opérateurs : 
• + = addition,    
• - = soustraction,      
• * = multiplication,     
• / = division,     
• ** = puissance.    

#### Opérateurs d'affectation :    
• ++ = incrémenter une valeur (i++),   
• -- = décrémenter une valeur (i--),   
• += = méthode différente pour ajouter une valeur (aussi disponible : -=, *=, /=).  

••• TIPS •••    
• Si on considère let total = 2 et let x = 4. Dans le cas où on voudrait passer x à total afin que la valeur de se dernier soit 5, on ferait ```total = ++x```  
Attention au placemment du l'opérateur avant sinon l'incrémentation ne sera pas prise en compte.     

#### Opérateurs ternaires :   
• if-else =  x == y ? 'bonjour' : 'au revoir';    

### Les fonctions :     
• Une fonction est un algorythme qui a un nom. Ex :   
```
// Declare function
function maFonctionCoucou() {
    console.log('Hello');
}

// Call function
maFonctionCoucou();
```    
• Une fonction flêchée est identique à une fonction traditionnnelle mais sera placée dans une constante. Ex :      
```
// Declare function
const faireCoucou = (cible) => {
    console.log('Hello' + cible);
};

// Use with parameters
faireCoucou('you');
faireCoucou('Toto');
```     
• Cas 'return' :    
```
// Declare function and return
function calc(x, y){
   return x + y;
}
```   
• Fonction qui se joue toute seule :     
```
// Declare function
(function maFonction(){
    console.log('Je me joue seule');
})();
```   
• Cas de la fonction anonyme :    
```
(() => {
    console.log('Je me joue aussi seule et suis anonyme)
})();
```    

••• TIPS •••    
• 'return' met fin à une fonction.    

### La portée des variables :    
• Une variable définie au sein d'une fonction ne sera connue qu'au sein de sa scope soit à l'intérieur de cette fonction.    
• Une variable définie à l'extérieur d'une fonction peut être appelée au sein de celle-ci, via ses paramètres.     

### Projet 'Calculatrice' : 
• Ce projet est disponible dans le répertoire '1_calculatrice'.    
    
        

## Chapitre 2 : Le DOM   
• Qu'est-ce que le DOM ?    
• Les sélecteurs   
• AddEventListener   
• Les types d'évènements   
• Méthodes autour des events   
• Foreach   
• Manipulation du DOM par l'exemple   
• Set Property   
• Le BOM    
• Mise en application à l'aide d'un projet 'Générateur de bulles'    

### Qu'est-ce que le DOM ?   
• " Le Document Object Model (DOM) est une interface de programmation qui permet à des scripts d'examiner et de modifier le contenu du navigateur web. Par le DOM, la composition d'un document HTML est représentée sous forme d'un jeu d'objets - lesquels peuvent représenter une fenêtre, une phrase ou un style, par exemple - reliés selon une structure en arbre. " (MDN)    

### Les sélecteurs :    
• Pour cibler un élément sur le DOM, on peut utiliser 'querySelector' et 'getElementById'.     

### Le BOM :     
• Le Browser Object Model (BOM) contient l'objet Window.     



## Chapitre 3 : Le traitement des données :    
• Rappel des types de données    
• Les tableaux    
• Les objets    
• Les structures de contrôle     
• Projet : Texte typing    
• Méthodes pour les strings    
• Méthodes pour les numbers    
• Méthodes pour les array    
• Méthodes pour les objets    
• Les Dates        
• Le destructuring    
• Les datasets    
• Les REGEX     
• Projet : Form checker    

### Rappel des types de données :    
• let string = 'Chaine';    
• let number = 27;    
• let boolean = true;    
• let undefinedVariable; //undefined    

••• TIPS •••    
• Pour connaitre le type d'une variable, on peut utiliser "typeof"    



## Chapitre 4 : Les API :     
• Qu'est-ce qu'une API    
• XMLHttpRequest     
• Fetch     
• Projet : générateur de blagues     
• Méthodes POST, PUT, DELETE    
• L'asynchrone    
• Projet : User API    
• JSON    
• Local Storage / Session Storage   
• Les cookies      
• Projet : Meal API    

### Qu'est-ce qu'une API :   
• Définition : Une API est un ensemble de définitions et de protocoles qui facilite la création et l'intégration de logiciels d'applications. Elle est parfois considérée comme un contrat entre un fournisseur d'informations et un utilisateur d'informations, qui permet de définir le contenu demandé au consommateur (l'appel) et le contenu demandé au producteur (la réponse).     
• API est un acronyme anglais qui signifie "Application Programming Interface", ce qui l'on traduit par 'interface de programmation d'application".    
• Les API de JavaScript : window, geolocalisation, history, client-storage, canvas, ...     

### Fetch :     
• Code de réponse HTTP :   
• Réponses informatives : 100 -> 199   
• Réponses de succès : 200 -> 299   
• Redirections : 300 -> 399    
• Erreurs du client : 400 -> 499    
• Erreurs du serveur : 500 -> 599    

### JSON :     
• JavaScript Object Notation : c'est la façon de noter des objets en JavaScript.    

### Local storage :    
• Le local storage a une capacité de stockage bien plus importante que les cookies : un cookie = 4Ko | local storage (par défaut sur Chrome & FireFox) = 10Mo qui peuvent être configurés.

### Les cookies :       
• Un cookie est envoyé d'un serveur vers un navigateur qui va le stocker.    



## Chapitre 5 : Programmation Orientée Objet :     
• Rappel des objets en JS         
• Les fonctions dans l'objet (méthodes)         
• Les méthodes natives des objets         
• Fonction constructeur         
• Les "factory functions"         
• Les prototypes         
• Les classes         
• L'héritage         
• Projet : Yoga App         

# Les prototypes :    
• Les fonctions déclarées dans le prototype sont 30% plus rapides que des fonctions déclarées dans la class.    