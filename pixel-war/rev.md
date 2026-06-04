# Fiche de Révision : Introduction au JavaScript & Notions de Base

---

## 1. JavaScript dans le Navigateur
* Chaque page web dispose de son propre environnement d'exécution JavaScript indépendant.
* Cet environnement possède sa propre mémoire et son propre moteur d'exécution.
* Les variables créées dans la console ou via des scripts restent en mémoire tant que la page n'est pas rechargée.
* L'environnement est strictement cloisonné pour des raisons de sécurité.
* JavaScript n'a pas accès au contenu du disque dur de l'utilisateur ni aux autres onglets ouverts.
* Les requêtes HTTP ne sont autorisées que vers le serveur d'origine de la page (ou ressources référencées).

---

## 2. Syntaxe et Bases du Langage
* JavaScript s'inspire de la syntaxe des langages C (C++, Java).
* Un identifiant (nom de variable) doit commencer par une lettre, un `_` ou un `$`.
* Les mots-clés réservés du langage ne peuvent pas être utilisés comme identifiants.
* Les structures de contrôle incluent `for`, `if`, `break`, et `continue`.
* Les commentaires s'écrivent avec `//` (sur une ligne) ou `/**/` (sur plusieurs lignes).
* Le point-virgule `;` en fin d'instruction n'est pas obligatoire mais reste fortement recommandé.
* Les blocs d'instructions sont délimités par des accolades `{}`.

---

## 3. Les Types de Données
Le JavaScript est un langage faiblement typé, ce qui signifie qu'une variable peut changer de type dynamiquement en cours d'exécution.

**Les types primitifs :**
* `string` (chaîne de caractères)
* `boolean` (vrai/faux)
* `number` (englobe tous les nombres, entiers comme décimaux)
* `function`
* `symbol`
* `undefined` (indique que la variable n'a pas de valeur ou de type assigné)
* `null`

**Les objets :**
Tout le reste est considéré comme un objet (`object`), notamment les `String`, `Array`, `Date`, et les objets personnalisés.

**Attention aux égalités :**
* `==` et `!=` : Compare uniquement les valeurs (convertit les types si nécessaire).
* `===` et `!==` : Compare les valeurs **et** les types (égalité stricte, à privilégier).

---

## 4. Déclaration des Variables : var, let et const

| Mot-clé | Portée (Scope) | Réaffectation possible ? | Remarques |
| :--- | :--- | :--- | :--- |
| `var` | Fonctionnelle | Oui | Historique, à éviter aujourd'hui. |
| `let` | Bloc | Oui | Recommandé pour les variables changeantes. |
| `const` | Bloc | Non | Doit être initialisée à la déclaration. |

---

## 5. Les Tableaux (Arrays)
* Un tableau est une structure de données ordonnée accessible par des indices numériques.
* En JavaScript, les tableaux sont dynamiques : leur taille peut évoluer.
* Un même tableau peut contenir différents types de données mélangés (ex: `["John", "Doe", 25]`).

---

## 6. La Déstructuration et l'opérateur `...`
La déstructuration est une syntaxe moderne permettant d'extraire rapidement des données d'un tableau ou d'un objet pour les assigner à des variables.

**Exemples pratiques :**
* **Déstructuration basique :** `const [firstName, lastName, age] = person;`
* **Valeur par défaut :** `const [name, taille = 170] = person;`
* **Ignorer des éléments :** `const [, lastName] = person;` (ignore le 1er élément)
* **Déstructuration d'objet :** `const { age, firstName } = person;`
* **Renommer la variable :** `const { firstName: fName } = person;`

**L'opérateur `...` :**
* **Rest Operator (dans une déstructuration) :** Capture le "reste" des éléments dans un nouveau tableau (ex: `const [first, ...rest] = fruits;`).
* **Spread Operator (propagation) :** Éclate les éléments d'un tableau pour les fusionner (ex: `let all = [...tab1, ...tab2];`).

---

## 7. Exercices d'application (Correction à coder)

Voici le bloc d'exercices extrait du cours, prêt à être copié-collé dans ton éditeur pour t'entraîner :

```html
<html>
<head>
 <title>Exercices</title>
</head>
<body>
 <p>Rien d'intéressant à regarder ici. Faîtes clic-droit/inspecter pour regarder ce qui se passe dans le debugger pour faire du pas à pas dans les sources.</p>
 
 <script>
     // Exercice 1 : Compléter pour qu'une variable age contienne "Doe" (Note: "Doe" est le nom, 25 est l'âge)
     const person = ["John", "Doe", 25];        
     
     // Exercice 2 : Créer un nouveau tableau à partir des deux autres
     const person2 = ["John", "Doe", 25];        
     const autrePersonne = ["Jane", "Doe", 22];
     
     // Exercice 3 : Utiliser l'opérateur ... pour récupérer le 1er fruit, le 2ème, et le reste dans un tableau
     const fruits = ["Apple", "Banana", "Pineapple", "Orange", "Grapes"];            
     
     // Exercice 4 : Pourquoi ce code plante ? (Le rest operator doit toujours être le dernier élément)
     // const [firstFruit, ...restOfFruits, lastFruit] = fruits;
     
     // Exercice 5 : Créer un tableau contenant les deux derniers éléments de chaque tableau via destructuration
     const fruits1 = ["Apple", "Banana", "Pineapple", "Mango"];
     const fruits2 = ["Orange", "Grapes"];

     // Exercice 6 : Trouver l'erreur dans la destructuration de l'objet imbriqué
     const fruit1 = ["Apple", {"taste" : "sweety", "calorie" : 30}];
     // const [, {, calorie: calorieApple}] = fruit1; // Syntaxe erronée
     // console.log(calorieApple);
</script>
</body>
</html>

## 8. Création d'un projet avec Vite
Vite est un outil de construction (build tool) moderne et ultra-rapide pour les projets web. Il prépare l'environnement de travail de manière automatisée.

**Initialiser un projet :**
1. Lancer la commande : `npm create vite@latest`
2. Définir le nom du projet.
3. Choisir le framework : `vanilla` (JavaScript pur, sans framework lourd).
4. Choisir la variante : `javascript`.

---

## 9. Architecture standard d'un projet Vite
Une fois le projet généré, l'arborescence de base comprend des dossiers et fichiers critiques :

* `index.html` : La page principale du site, le point d'entrée qui chargera les scripts.
* `package.json` : La carte d'identité du projet. Il contient les métadonnées (nom, version) et surtout la liste des dépendances (packages) requises pour faire tourner le code.
* `public/` : Le dossier réservé aux ressources statiques brutes (images, vidéos, polices) qui seront accessibles publiquement.
* `src/` : Le dossier de travail principal contenant tout le code source JavaScript.
* `node_modules/` : Le dossier (généré automatiquement) où sont téléchargés physiquement les codes des packages. 

---

## 10. Gestion des Packages (NPM) et Git
NPM (Node Package Manager) permet d'ajouter des bibliothèques de code existantes à ton projet.

**Installer un package :**
* Commande : `npm install <nom_du_package>` (Ex: `npm install dayjs`).
* Conséquences : Le code est téléchargé dans `node_modules` et la ligne est automatiquement ajoutée à la section `"dependencies"` du `package.json`.

**🚨 LA RÈGLE D'OR ABSOLUE (GIT) 🚨**
Il ne faut **JAMAIS** versionner ni envoyer le dossier `node_modules` sur un dépôt Git (il est beaucoup trop lourd). 

**Le cycle de travail standard (Workflow Git) :**
1. Cloner le dépôt Git du projet.
2. Faire `npm install` (NPM va lire le `package.json` et télécharger automatiquement le bon `node_modules` localement).
3. Lancer le serveur local avec `npm run dev`.
4. Coder et sauvegarder (la page s'actualise seule grâce au *live reload*).

---

## 11. Exemple d'utilisation d'un package (Day.js)
Une fois un package installé, il faut l'importer dans le fichier JavaScript pour pouvoir l'utiliser.

**Exemple dans `main.js` :**
```javascript
// 1. Importation du code depuis le dossier node_modules
import dayjs from 'dayjs';

// 2. Utilisation des méthodes du package
const now = dayjs();
const formattedDate = now.format('YYYY-MM-DD HH:mm');

// 3. Affichage ou manipulation
console.log(`La date du jour est : ${formattedDate}`);

// Injection dynamique dans le HTML (DOM)
document.querySelector('#app').innerHTML += `<p>Nous sommes le : ${formattedDate}</p>`;

## 12. Les Boucles Classiques (for et while)
* JavaScript intègre les instructions itératives `for` et `while` de la même manière qu'en Java.
* La boucle `for` est idéale pour itérer sur un tableau à l'aide d'un indice régulier (ex: `for (let i = 0; i < person.length; i++)`).
* La boucle `while` est parfaite pour les itérations indéterministes, notamment lorsqu'il faut attendre qu'une condition spécifique soit remplie en cours d'exécution (ex: générer des nombres aléatoires jusqu'à trouver un nombre impair).

---

## 13. Les Boucles Modernes et Spécifiques
* La boucle `for...of` permet de parcourir directement les valeurs des éléments énumérables (comme les tableaux).
* L'utilisation de `for...of` est à privilégier pour améliorer la lisibilité du code lorsqu'on n'a pas besoin de récupérer l'indice de l'élément.
* La boucle `for...in` est spécialement conçue pour itérer à travers les clés (propriétés) d'un objet, bien qu'elle fonctionne aussi sur les tableaux.
* Le mode "Callback" avec `forEach` est très courant en JS pour appliquer une fonction de rappel à chaque élément d'un tableau.
* La méthode `forEach` donne accès simultanément à la valeur de l'élément, à son index, et au tableau complet via les paramètres de sa fonction (ex: `persons.forEach(function(person, index, tab) { ... })`).
* L'itération avec `forEach` est particulièrement recommandée et utilisée lors du parcours des éléments du DOM (manipulation des balises HTML).

---

## 14. Architecture des Boucles avec Vite.js
* Dans un projet modulaire construit avec Vite (comme pour le projet de la SAE), le code doit être séparé en plusieurs fichiers.
* Les fonctions (même celles contenant de simples boucles) doivent être rendues disponibles pour les autres fichiers grâce au mot-clé `export` (ex: `export function testBoucles() { ... }`).
* Le fichier principal `main.js` doit obligatoirement récupérer cette fonction avec une instruction `import` (ex: `import { testBoucles } from './boucles.js'`) avant de pouvoir l'exécuter.

---

## 15. Exercices d'application (Les Boucles)

Voici le bloc d'exercices extrait du cours, prêt à être copié-collé pour l'entraînement :

```javascript
// Exercice 1
// En utilisant for...of, affichez tous les fruits
const fruits = ["Apple", "Banana", "Pineapple", "Orange", "Grapes"];            

// Exercice 2
// En utilisant un forEach + une fonction callback, affichez tous les fruits

// Exercice 3
// Boucler pour afficher uniquement le nom des fruits au gout sucré
const fruit1 = [
    {"Name" :"Apple", "taste" : "sweety", "calorie" : 30},
    {"Name" :"Tomato", "taste" : "salty", "calorie" : 10},
    {"Name" :"Mango", "taste" : "sweety", "calorie" : 10}
];

// Exercice 4
// Corriger ce code (Attention aux limites de la boucle, aux types de données et à l'interpolation de variables)
const numbers = [1, 2, "3", 4, 5];
let sum = 0;

for (let i = 0; i <= numbers.length; i++) {
    sum += numbers[i];
}
console.log("La somme des nombres est : ${sum}");

const chiffreATrouver = 3; 
let i = 0;
let trouve = false;

while (i < numbers.length && !trouve){
    trouve = chiffreATrouver == numbers[i];
    i++;
}
console.log(`Résultat de la boucle : ${trouve}`);


## 16. Les Fonctions en JavaScript (Focus sur les Fonctions Fléchées)
* JavaScript propose plusieurs manières de déclarer des fonctions, mais **le cours impose l'utilisation exclusive des fonctions fléchées (Arrow functions)** introduites par ECMAScript 6.
* Les fonctions dites "classiques" (utilisant le mot-clé `function`) sont considérées comme archaïques dans le cadre de cet apprentissage.
* **Règle d'or du cours :** Toujours utiliser des fonctions fléchées assignées à des variables `const`.

---

## 17. Syntaxe des Fonctions Fléchées
La syntaxe s'adapte en fonction de la complexité du code contenu dans la fonction :

* **Retour implicite (Une seule instruction) :** Pas besoin d'accolades `{}` ni du mot-clé `return`.
  ```javascript
  const add = (a, b) => a + b;
  ```
* **Retour explicite (Plusieurs instructions) :** Les accolades `{}` sont obligatoires et il faut explicitement écrire `return` pour renvoyer une valeur.
  ```javascript
  const min = (a, b) => {
      if (a < b) return a;
      else return b;
  };
  ```

---

## 18. Méthodes et Classes
Dans une classe (ou un objet), les méthodes doivent également être déclarées sous forme de fonctions fléchées :
```javascript
class Truc {
  parler = () => {
    console.log("Je suis une méthode, et je parle");
  }
}
```

---

## 19. Le comportement du mot-clé `this` (Très important)
C'est la différence majeure entre une fonction classique et une fonction fléchée :
* **Fonction classique :** Elle crée son propre contexte `this`. Utilisée dans un `setInterval` ou un événement DOM, elle "perd" la référence à la classe d'origine (et provoque une erreur).
* **Fonction fléchée :** Elle n'a **pas** son propre contexte `this`. Elle hérite automatiquement du `this` de son contexte parent (le contexte lexical). 

**Exemple typique d'erreur évitée grâce aux fonctions fléchées :**
```javascript
class Counter {
  constructor() {
    this.count = 0;
  }
  startCounting() {
    // Avec une fonction fléchée, "this" pointe toujours vers la classe Counter
    setInterval(() => {
      this.increment(); // Cela fonctionne correctement
    }, 1000);
  }
  increment() {
    this.count++;
  }
}
```

---

## 20. Les Callbacks (Fonctions en paramètre)
En JavaScript, il est très courant de passer une fonction comme argument (paramètre) d'une autre fonction. C'est ce qu'on appelle un Callback.
```javascript
const someFunction = (callback) => {
  console.log("Exécution de someFunction");
  callback(); // Appel de la fonction passée en paramètre
};

const maFonctionCallback = () => console.log("Je suis le callback");
someFunction(maFonctionCallback);
```

---

## 21. Exercices d'application (Les Fonctions)

Voici le bloc d'exercices extrait du cours, prêt à être copié-collé pour l'entraînement :

```javascript
// Exercice 1 : Transformer ces 5 fonctions en fonctions fléchées et faire les appels

// (Les corrections des fonctions classiques vers fléchées à coder)

// Exercice 2 : Ce code est buggé, décommentez-le et corrigez-le.
/*
const compterNombresPairs () {
    let count = 0;
    tableau.forEach(nombre {
            if (nombre % 2 == 0) {
            count+;
  
  else return b;
      }
  };
*/
// Exemple d'utilisation
/*
const nombres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const nombreDeNombresPairs = compterNombresPairs(nombres);
console.log("Nombre de nombres pairs : " + nombreDeNombresPairs);
*/


// Exercice 3 : Ecrire avec une boucle for...of, une fonction fléchée 
// qui vérifie si un tableau est trié par ordre croissant

// Exemple d'utilisation
// const tableau1 = [1, 2, 3, 4, 5];
// console.log("Le tableau est trié : " + estTableauTrie(tableau1));
// const tableau2 = [5, 3, 8, 1, 9];
// console.log("Le tableau est trié : " + estTableauTrie(tableau2)); 
```


## 22. Les Collections en JavaScript
En JavaScript, les structures de données telles que les **Arrays**, les **Sets**, et les **Maps** offrent des moyens flexibles de stocker, organiser et manipuler des données.

## 23. Array (Les Tableaux)
Séquence ordonnée d'éléments. Il existe de nombreuses méthodes pratiques pour les manipuler.

**Méthodes classiques :**
* `push()` / `pop()` : Ajoute ou retire un élément à la fin.
* `unshift()` / `shift()` : Ajoute ou retire un élément au début.
* `concat()` : Fusionne deux tableaux.
* `indexOf()` / `lastIndexOf()` : Trouve la position d'un élément.

**La Déstructuration (Alternative recommandée) :**
Permet de remplacer les méthodes classiques (`push`, `concat`) de manière plus moderne.

```javascript
let fruits = ['pomme', 'orange'];
fruits = [...fruits, 'banane']; // Équivalent de push

let legumes = ['carotte', 'brocoli'];
let aliments = [...fruits, ...legumes]; // Équivalent de concat

// Extraire avec le Rest Operator
const [lettre1, lettre2, ...resteLettres] = fruits.pop(); 
```

**Initialisation rapide :**
* Tableau simple : `Array(5).fill(Math.random(10));`
* Matrice (2D) : `Array.from({ length: 5 }, () => Array(5).fill(Math.random(10)));`

## 24. Set (Les Ensembles)
Structure de données stockant des **valeurs uniques** (sans doublons) et sans indexation.
* **Propriétés :** Pas d'index, itérable (`for...of`), taille dynamique (`size`).
* **Méthodes utiles :** `add()`, `delete()`, `has()`.

```javascript
let mySet = new Set();
mySet.add(1);
mySet.add("texte");
mySet.add("texte"); // Ignoré car doublon
console.log(mySet.size); // 2
```

## 25. Map (Les Dictionnaires)
Structure associant des paires **clé-valeur**.
* **Propriétés :** Clés uniques (écrase l'ancienne valeur si la clé existe déjà), accepte n'importe quel type de clé, itérable (`for...of`), taille dynamique (`size`).
* **Méthodes utiles :** `set()`, `get()`, `has()`, `delete()`.

```javascript
let sayings = new Map();
sayings.set("dog", "woof");
sayings.set("cat", "meow");

for (let [key, value] of sayings) {
  console.log(key + " goes " + value);
}
```

## 26. Comment choisir entre Array, Set et Map ?
* **Utiliser Array :** Ordre important, accès par indice, présence de doublons, besoin de méthodes de séquences (`push`, `slice`...).
* **Utiliser Map :** Association clé/valeur, opérations fréquentes sur les paires.
* **Utiliser Set :** Stockage de valeurs uniques, vérifications d'existence très fréquentes (`has`).

## 27. Exercice : Objets et Collections

```javascript
/**
 * Convertit une map d'étudiants en un tableau d'objets étudiants.
 * @param {Map<string, number[]>} mapEtudiants - La map d'étudiants à convertir.
 * @returns {Object[]} Un tableau d'objets représentant les étudiants.
 */
const convertirMapEnEtudiants = (mapEtudiants) => {
   /* À vous de compléter */
}

// Exemple d'utilisation
const mapEtudiants = new Map([
    ["Alice", [85, 25]],
    ["Bob", [90, 30]],
    ["Charlie", [75, 28]],
    ["David", [80, 26]]
]);

const etudiants = convertirMapEnEtudiants(mapEtudiants);
console.log(etudiants);
```


## 11. Le DOM (Document Object Model)
Le DOM est une représentation hiérarchique et structurée (sous forme d'arbre) d'un document HTML. Il agit comme une interface de programmation (API standardisée par le W3C) permettant à JavaScript d'interagir dynamiquement avec la page web.


* Chaque élément de la page (balises HTML, attributs, texte) est transformé et représenté sous forme **d'objet** dans le DOM.

## 12. L'Objet `window`
L'environnement JavaScript de la page est initialisé avec l'objet `window`, qui représente la **fenêtre globale du navigateur** affichant la page web. 

**Propriétés principales de `window` :**
* `window.innerHeight` : Hauteur de la fenêtre d'affichage.
* `window.innerWidth` : Largeur de la fenêtre d'affichage.
* `window.location` : URL actuelle de la page.
* `window.navigator` : Informations sur le navigateur utilisé.
* `window.screen` : Informations sur l'écran physique de l'utilisateur.
* `window.document` : Le document HTML chargé dans la fenêtre.

## 13. L'Objet `document` et l'Arborescence
Tous les éléments du document HTML sont structurés sous forme d'un arbre. Le point d'entrée pour manipuler cet arbre est l'objet `document` (ou `window.document`).

**Naviguer dans le DOM (La propriété `children`) :**
Pour descendre dans l'arborescence, on utilise la propriété `children`, qui renvoie un **tableau** contenant les balises enfants directes dans leur ordre d'apparition.

**Exemple de navigation :**
Soit le code HTML suivant :
```html
<body>
    <h1>Titre</h1> <div id="images"> <img src="[http://urlz.fr/TnT](http://urlz.fr/TnT)"> <img src="[http://urlz.fr/TnU](http://urlz.fr/TnU)"> </div>
</body>

## 12. Typage des Nœuds dans le DOM
Le DOM est constitué de différents "nœuds" (nodes) qui reflètent la structure de la page. Chaque nœud possède une propriété `nodeType` qui renvoie un numéro correspondant à son type.

**Les principaux types à retenir :**
* **`ELEMENT_NODE` (Type 1) :** Représente une balise HTML (`<p>`, `<div>`, `<img>`, `<h1>`...).
* **`ATTRIBUTE_NODE` (Type 2) :** Représente un attribut d'une balise (ex: `id="titre"`).
* **`TEXT_NODE` (Type 3) :** Représente le texte contenu *à l'intérieur* d'une balise (y compris les espaces ou retours à la ligne dans le code source).

**Attention au piège classique :** Un `ELEMENT_NODE` (la balise `<p>`) est différent du `TEXT_NODE` (le texte écrit dans le `<p>`). Si un nœud est de type texte, on utilise généralement `.textContent` pour le lire ou le modifier.

---

## 13. Méthodes d'accès aux Nœuds (Sélection)
Il est crucial de comprendre ce que chaque méthode retourne pour éviter les erreurs de manipulation.

* `document.getElementById('id')` : Retourne **UN SEUL** élément (celui qui porte l'ID).
* `document.getElementsByTagName('balise')` : Retourne une **`HTMLCollection`** (une collection de tous les éléments ayant cette balise).
* `document.querySelectorAll('.classe')` : Retourne une **`NodeList`** (une liste statique des éléments correspondants, sur laquelle on peut facilement itérer).

---

## 14. Se déplacer dans l'arborescence du DOM
Puisque le DOM est un arbre, on peut naviguer d'un nœud à l'autre à partir d'un élément sélectionné :

* `parentNode` : Remonte au nœud parent.
* `previousSibling` / `nextSibling` : Va au nœud "frère" précédent ou suivant.
* `firstChild` / `lastChild` : Cible le premier ou le dernier nœud enfant (attention, cela inclut souvent les `TEXT_NODE` invisibles comme les retours à la ligne).
* `firstElementChild` : Cible la première vraie balise enfant (ignore les textes/espaces).
* `childNodes` : Retourne une `NodeList` contenant tous les enfants.

---

## 15. Modifications du DOM (Création et Suppression)
* `document.createElement('balise')` : Crée un nouvel élément HTML en mémoire.
* `document.createTextNode('texte')` : Crée un nœud de texte indépendant.
* `element.appendChild(enfant)` : Ajoute un nœud à la fin de la liste des enfants d'un élément parent.
* `element.insertBefore(nouveau, reference)` : Insère un nœud juste avant un autre.
* `element.remove()` : Supprime définitivement l'élément du DOM.

---

## 16. La différence entre `value`, `textContent` et `nodeValue`
C'est une règle d'or pour le semestre 2 : utiliser la bonne propriété selon la cible.

* **`value` :** À utiliser **exclusivement pour les formulaires** (`<input>`, `<textarea>`, `<select>`). Elle lit ou modifie ce que l'utilisateur a tapé ou choisi.
* **`textContent` :** À utiliser pour **tous les autres éléments HTML** (`<div>`, `<p>`, `<span>`). Elle lit ou modifie le texte visible brut en ignorant les éventuelles balises HTML imbriquées.
* **`nodeValue` :** C'est une propriété générale de base (bas niveau). **À éviter** dans vos développements au profit de `value` ou `textContent`, qui sont beaucoup plus pratiques.

---

## 17. Exercice d'application (Manipulation du DOM)

Voici l'exercice extrait du cours, prêt à être copié-collé pour l'entraînement :

```html
<html>
<head>
    <title>Exercices</title>
    <style>
        .red-border { border: 2px solid red; }
    </style>
</head>
<body>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
    
    <p><img src="[https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Gustave_Courbet_-_The_Trout_-_WGA05474.jpg/220px-Gustave_Courbet_-_The_Trout_-_WGA05474.jpg](https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Gustave_Courbet_-_The_Trout_-_WGA05474.jpg/220px-Gustave_Courbet_-_The_Trout_-_WGA05474.jpg)" alt="Courbet peinture"> </p>
    <p id="legende"> </p>

    <p>Lorem ipsum dolor sit amet, supprimer adipisicing elit...</p>

    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>

    <script>     
        // Objectif 1 : Ajouter une légende au <p id="legende"> à partir de l'attribut "alt" de l'image.
        
        // Objectif 2 : Supprimer un paragraphe s'il contient le mot "supprimer" (utiliser .includes() sur le textContent).
        
        // Objectif 3 : Ajouter une bordure rouge (classe 'red-border') autour de chaque paragraphe (utiliser .classList.add()).
    </script>
</body>
</html>
```


## 18. La Gestion des Événements (Events)
Le navigateur peut capturer plus de 80 types d'événements déclenchés par l'utilisateur (clic, survol, frappe au clavier, soumission d'un formulaire, etc.). 
Lorsqu'une action est effectuée, un objet `event` est généré. Il contient des informations cruciales :
* `event.target` : Cible l'élément HTML exact qui a subi l'action (très important).
* `event.timeStamp` : Temps écoulé depuis le chargement.
* `event.key` : La touche pressée (pour les événements clavier).

---

## 19. La méthode addEventListener
Permet d'écouter un événement sur un élément du DOM. Elle prend deux paramètres : le type d'événement (ex: "click") et la fonction à exécuter.

Les 3 approches (Le cours impose la 3ème) :
1. Fonction nommée : 
    let b1 = document.getElementById("b1");
    b1.addEventListener("click", maFonction);

2. Fonction anonyme : 
    let b2 = document.getElementById("b2");
    b2.addEventListener("click", function(event) { ... });

3. Fonction fléchée (Obligatoire pour le BUT) :
    let b3 = document.getElementById("b3");
    b3.addEventListener("click", (event) => {
        console.log(event);
    });

Supprimer un écouteur : `EventTarget.removeEventListener("click", nomDeLaFonction)`. 
Attention : Cela ne fonctionne que si la fonction a été nommée et stockée.

---

## 20. Le piège du mot-clé "this" dans les événements
Comprendre `this` est vital en JavaScript, surtout pour les événements :

* Avec une fonction classique : `this` fait référence à l'élément HTML qui a déclenché l'événement (ex: le bouton cliqué).
* Avec une fonction fléchée (Celle que tu dois utiliser) : La fonction fléchée n'a pas son propre `this`. Elle prend le `this` de son contexte parent (souvent la classe ou `window`). 
👉 La solution : Pour manipuler l'élément cliqué dans une fonction fléchée, il NE FAUT PAS utiliser `this`, mais utiliser `event.target`.

Exemple dans une classe (Bonne pratique) :
    class Something {
        constructor() { this.name = 'Test'; }
        
        maMethodeFlechee = (event) => {
            console.log(this.name); // Fonctionne, affiche 'Test'
            event.target.style.color = 'green'; // Modifie le bouton cliqué
        }
    }

---

## 21. Interagir avec les composants de formulaire
* Liste déroulante (<select>) : Événement "change". Valeur = `element.options[element.selectedIndex].value`.
* Case à cocher (<input type="checkbox">) : Événement "change". État = `element.checked` (retourne true/false).
* Sélecteur de couleur (<input type="color">) : Événement "input". Valeur = `element.value` (code hexadécimal).
* Champ texte/recherche (<input type="search">) : Événement "input". Valeur = `element.value`.
* Bouton simple (<button>) : Événement "click".

---

## 22. Structurer son code (Modules et Import/Export)
Pour un vrai projet, on utilise des modules pour séparer la logique.

1. Dans le HTML (Déclarer le module) :
Il faut obligatoirement ajouter type="module" pour autoriser les imports.
    <script type="module" src="app.js"></script>

2. Exporter une classe (Dans Utilisateur.js) :
* Export global (Par défaut) : `export default class Utilisateur { ... }` 
* Export nommé : `export class Utilisateur { ... }` 

3. Importer une classe (Dans app.js) :
    // Si export nommé :
    import { Utilisateur } from './Utilisateur.js';
    const user = new Utilisateur("Journet", "Nicholas");

---

## 23. Exercice d'application (Mini-Projet Liste Utilisateurs)

    <body>
        <h1> Liste d'utilisateurs </h1>
        <ul id="userList"></ul>

        <div>
            <input id="login" type="text" placeholder="Login">
            <input id="mail" type="email" placeholder="Mail">
            <input type="date" id="dateNaissance">
            <button id="addUser">Ajouter</button>
        </div>

        <div>
            <select id="delUserList"></select>
            <button id="delUser">Supprimer</button>
        </div>

        <script type="module" src="listePersonne.js"></script>
    </body>



## 24. Manipuler du JSON (JavaScript Object Notation)
JSON est un format de données natif en JavaScript, très utilisé pour échanger des données entre un client et un serveur (API) ou pour stocker des informations structurées.

Caractéristiques du JSON :
* Basé sur des paires clé-valeur.
* Les clés doivent obligatoirement être des chaînes de caractères (entre guillemets doubles `" "`).
* Les valeurs peuvent être : un nombre, une chaîne, un booléen, un objet, un tableau ou null.
* Les objets peuvent être imbriqués pour créer des structures hiérarchiques complexes.
* Attention à la syntaxe : le dernier élément d'un objet ou d'un tableau ne doit jamais se terminer par une virgule.

Exemple de structure JSON :
    {
      "person": {
        "name": "John Doe",
        "age": 30,
        "isStudent": false,
        "courses": ["Math", "History"]
      }
    }

---

## 25. Convertir un objet JS en JSON : JSON.stringify()
Permet de transformer un objet JavaScript classique en une chaîne de caractères au format JSON. C'est l'étape indispensable avant d'envoyer des données vers un serveur.

Exemple :
    const person = { name: 'John', age: 30 };
    const jsonString = JSON.stringify(person);
    console.log(jsonString); 
    // Résultat (String) : '{"name":"John","age":30}'

---

## 26. Convertir une chaîne JSON en objet JS : JSON.parse()
Permet de transformer une chaîne de caractères JSON (reçue d'un serveur, par exemple) en un véritable objet JavaScript manipulable dans le code. 
⚠️ Attention : La chaîne doit être parfaitement bien formée, sinon cette méthode génère une erreur qui fera planter le script.

Exemple :
    const jsonString = '{"name":"John","age":30,"city":"New York"}';
    const person = JSON.parse(jsonString);
    console.log(person.name); 
    // Résultat : "John"

    ## 27. Requêtes Asynchrones (Fetch API)
La programmation asynchrone permet de lancer une tâche longue (comme télécharger des données) sans bloquer le reste de l'application. Le programme continue de tourner et traite la réponse une fois qu'elle arrive.



L'outil principal en JS pour ça est `fetch()`. Il interroge un serveur et retourne une **Promesse** (Promise).

**Syntaxe classique avec `.then()` :**
    fetch('URL_DU_SERVEUR')
      .then(response => {
        if (!response.ok) throw new Error("Erreur HTTP");
        return response.json(); // Transforme la réponse en objet JS
      })
      .then(data => {
        console.log(data); // Utilisation des données
      })
      .catch(error => console.error("Erreur :", error));

**Syntaxe moderne avec `async` / `await` :**
C'est exactement le même fonctionnement que `.then()`, mais la syntaxe est plus lisible. La fonction doit obligatoirement être déclarée avec `async`.
    const maFonction = async () => {
      try {
        let response = await fetch('URL_DU_SERVEUR');
        let data = await response.json();
        console.log(data);
      } catch (error) {
        console.error('Erreur :', error);
      }
    }

---

## 28. Le problème CORS (Cross-Origin Resource Sharing)
Si tu tentes de récupérer une ressource sur un serveur externe (ex: une image ou un JSON) depuis ton propre site local, le navigateur bloquera souvent la requête par sécurité (Erreur CORS).
Pour que ça marche, le serveur distant doit explicitement autoriser ton domaine (ou être configuré en API publique).

---

## 29. Les Méthodes HTTP (GET, POST, PATCH)
Pour communiquer avec une API REST, on utilise différentes méthodes selon l'action souhaitée.



| Caractéristique | GET (Lire) | POST / PATCH (Créer / Modifier) |
| :--- | :--- | :--- |
| **Usage** | Récupérer des informations. | POST : Créer. PATCH : Mettre à jour partiellement. |
| **Paramètres** | Passés directement dans l'URL (`?annee=2018`). | Passés dans le corps (`body`) de la requête. |
| **Visibilité** | Visible dans la barre d'adresse. | Invisible dans l'URL (mais visible dans le réseau). |
| **Taille des données**| Limitée (max ~2048 caractères). | Illimitée. |

**Exemple de requête POST (avec données dans le body) :**
    const formData = { annee: 1934, gagnant: "Groland" };

    fetch('URL_API', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData) // On convertit l'objet JS en texte JSON
    })
    .then(response => response.json())
    .then(data => console.log(data));

---

## 30. Exercice d'application : Citations de JCVD

L'objectif est d'utiliser `fetch` en `GET` sur la route `https://api-cours-s1.codenestedu.fr/citation?numero=X` pour afficher une citation lors du clic.

    <script>
        // À toi de coder ici :
        // 1. Cible le bouton/zone de clic (le rond orange).
        // 2. Maintiens un compteur pour le paramètre 'numero'.
        // 3. Utilise fetch() pour récupérer la citation de JCVD.
        // 4. Modifie le textContent de la balise <blockquote> p.
        // 5. Gère l'erreur 400/404 (avec le catch) si le serveur indique qu'il n'y a plus de citations.
    </script>

    