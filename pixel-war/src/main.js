export function initGrid(size) {
    //on sélectionne l'élément parent
  const board = document.getElementById('board');
  
  // on vide le plateau par sécurité
  board.innerHTML = ''; 

  // on ajuste le css pour que les colonnes correspondernt à la taille demandé
  board.style.gridTemplateColumns = `repeat(${size}, 15px)`;

  // on crée le documentFragment
  const fragment = document.createDocumentFragment();

  // boucle de génération de pixel
  const totalPixels = size * size;
  for (let i = 0; i < totalPixels; i++) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    
    //ajout de l'identifiant unique 
    pixel.dataset.id = i; 
    
    // On ajoute le pixel dans le fragment (en mémoire, pas sur l'écran)
    fragment.appendChild(pixel);
  }

  // injection dans le DOM
  board.appendChild(fragment);
}

//appel de la fonction pour générer une grille de 20x20 (de 400px)
initGrid(100);


// on cible le conteneur principal
const board = document.getElementById('board');

// on attend l'evennement sur le parent
board.addEventListener('click', (event) => {
  
  //on s'assure que le clic vient bien d'un pixel
  //sinon on doit cliquer sur la bordure grise
  if (event.target.classList.contains('pixel')) {
    
    // on extrait la donnée
    const pixelId = event.target.dataset.id;
    
    // et on l'affiche dans la console
    console.log(`Pixel cliqué : ${pixelId}`);
    

  }
});

//on sélectionne les champs de saisie
const uidInput = document.getElementById('uid-input');
const colorPicker = document.getElementById('color-picker');

// on écoute l'evenement de changement
colorPicker.addEventListener('change', (event) => {
  
  // et on lit les propriétés de value 
  const selectedColor = event.target.value; 
  const currentUid = uidInput.value;
  
  console.log(`L'utilisateur ${currentUid} a choisi la couleur ${selectedColor}`);
});


//rendu visu
function renderBoard(pixelsArray) {
  const pixelNodes = document.querySelectorAll('.pixel');
  
  // on regarde à quoi ressemble le premier pixel reçu
  console.log("Format d'un pixel reçu du serveur :", pixelsArray[0]);

  pixelNodes.forEach((pixelElement, index) => {
    if (pixelsArray[index]) {
      
      // premiere option l'api renvoie une chaine de charactere
      if (typeof pixelsArray[index] === 'string') {
        pixelElement.style.backgroundColor = pixelsArray[index];
      } 
      // deuxième, l'api renvoie des objets
      else if (typeof pixelsArray[index] === 'object' && pixelsArray[index].couleur) {
        pixelElement.style.backgroundColor = pixelsArray[index].couleur;
      }
      
    }
  });
}

//api
async function fetchBoardState() {
  try {
    const response = await fetch('https://pixel-api.codenestedu.fr/tableau');
    const data = await response.json();
    
    //on l'envoue a notre moteur de rendu
    renderBoard(data);
    
  } catch (error) {
    console.error("Erreur de connexion au serveur :", error);
  }
}

// et on l'appelle
fetchBoardState();