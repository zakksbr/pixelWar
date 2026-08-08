# Pixel IUT War ⚔️

Client web de la Pixel War, un projet collaboratif en pur Vanilla JS que j'ai développer dans le cadre de ma première année de BUT Informatique à l'IUT de Bordeaux, initié par Nicholas Journet. L'idée est simple : une grille partagée de 10 000 pixels, un `#UID`, des équipes et un cooldown.

---

## Fonctionnalités
* **Génération optimisée :** Création du plateau 100x100 via un `DocumentFragment` pour injecter les 10 000 divs d'un coup et éviter de faire exploser le DOM.
* **Guerre de factions :** 4 équipes dispo. Il faut lier son UID pour rejoindre un camp et commencer à dessiner.
* **Dashboard & Stats :** Tableau dynamique listant les joueurs récents, leur équipe, l'heure de la dernière modif et leur statut (banni ou non).
* **Synchronisation & Cooldown :** Requêtes API en arrière-plan toutes les 5 secondes pour rafraîchir la grille et afficher le temps d'attente restant (rouge = attente, vert = prêt).

---

## Stack 
* **Frontend :** HTML5, CSS3, JavaScript (ES6+ avec utilisation stricte des fonctions fléchées).
* **Réseau :** Fetch API (requêtes GET/PUT, gestion de l'asynchrone avec `async/await`).

---

## Comment lancer le projet sur le localhost

1. Installer les dépendances (cela va générer un dossier `node_modules` qu'il ne faut pas push) :
   `npm install`
2. Lance le serveur de dev :
   `npm run dev`

---
