//clé : 9ASBId4c6f1a

export function initGrid(size) {
  // on sélectionne l'élément parent
  const board = document.getElementById('board');
  
  // on vide le plateau par sécurité
  board.innerHTML = ''; 

  // 5px par px
  board.style.gridTemplateColumns = `repeat(${size}, 5px)`;

  // on crée le documentFragment
  const fragment = document.createDocumentFragment();

  // boucle de génération de pixel
  const totalPixels = size * size;
  for (let i = 0; i < totalPixels; i++) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    
    // ajout de l'identifiant unique 
    pixel.dataset.id = i; 
    
    // on ajoute le pixel dans le fragment
    fragment.appendChild(pixel);
  }

  // injection dans le DOM
  board.appendChild(fragment);
}

// appel de la fonction pour la grille de 100x100
initGrid(100);

// on cible le conteneur principal
const board = document.getElementById('board');

// on sélectionne les champs de saisie
const uidInput = document.getElementById('uid-input');
const colorPicker = document.getElementById('color-picker');

// on écoute l'evenement de changement
colorPicker.addEventListener('change', (event) => {
  // et on lit les propriétés de value 
  const selectedColor = event.target.value; 
  const currentUid = uidInput.value;
  console.log(`L'utilisateur ${currentUid} a choisi la couleur ${selectedColor}`);
});

// rendu visu
function renderBoard(pixelsArray) {
  const pixelNodes = document.querySelectorAll('.pixel');
  const flatPixels = pixelsArray.flat();
  
  pixelNodes.forEach((pixelElement, index) => {
    if (flatPixels[index]) {
      if (typeof flatPixels[index] === 'string') {
        pixelElement.style.backgroundColor = flatPixels[index];
      } else if (flatPixels[index].couleur) {
        pixelElement.style.backgroundColor = flatPixels[index].couleur;
      }
    }
  });
}

// api tableau
async function fetchBoardState() {
  try {
    const response = await fetch('https://pixel-api.codenestedu.fr/tableau');
    const data = await response.json();
    
    // on l'envoie a notre moteur de rendu
    renderBoard(data);
    
  } catch (error) {
    console.error("Erreur de connexion au serveur :", error);
  }
}

// on gère le choix des equipes
const teamButtons = document.querySelectorAll('.team-btn');

teamButtons.forEach(button => {
  button.addEventListener('click', async (event) => {
    const uid = uidInput.value;
    const teamId = event.target.dataset.team;

    if (!uid) {
      alert("Il faut mettre un UID avant de choisir une équipe !");
      return;
    }

    try {
      const response = await fetch('https://pixel-api.codenestedu.fr/choisir-equipe', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ uid: uid, nouvelleEquipe: parseInt(teamId) }) 
      });

      if (response.ok) {
        console.log(`Tu as rejoint l'équipe ${teamId} !`);
      } else {
        console.error("Erreur lors du choix de l'équipe");
      }
    } catch (error) {
      console.error("Erreur réseau :", error);
    }
  });
});

// on attend l'evennement sur le parent pour dessiner
board.addEventListener('click', async (event) => {
  
  // on s'assure que le clic vient bien d'un pixel
  if (event.target.classList.contains('pixel')) {
    
    // on extrait les données
    const pixelId = parseInt(event.target.dataset.id);
    const color = colorPicker.value;
    const uid = uidInput.value;
    
    if (!uid) {
      alert("Il faut un UID pour dessiner !");
      return;
    }

    // calcul des coordonnees pour le serveur
    const col = pixelId % 100;
    const row = Math.floor(pixelId / 100);

    try {
      // on envoie la requete
      const response = await fetch('https://pixel-api.codenestedu.fr/modifier-case', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          uid: uid,
          color: color, 
          col: col,     
          row: row      
        })
      });

      const serverInfo = document.getElementById('server-info');
      
      if (response.ok) {
        serverInfo.textContent = "Pixel modifié avec succès !";
        fetchBoardState(); 
      } else {
        const errorDetails = await response.text();
        console.error("Refus du serveur :", errorDetails);
        serverInfo.textContent = "Erreur regarde la console";
      }
    } catch (error) {
      console.error("Erreur lors de la modif :", error);
    }
  }
});

// temps attente
async function fetchWaitTime() {
  const uid = uidInput.value;
  if (!uid) return; 

  try {
    const response = await fetch(`https://pixel-api.codenestedu.fr/temps-attente?uid=${uid}`);
    if (response.ok) {
      const data = await response.json();
      const waitMessage = document.getElementById('wait-message');
      
      if (data.tempsAttente > 0) {
        waitMessage.textContent = `Attente : ${Math.ceil(data.tempsAttente)}s`;
        waitMessage.style.color = "red";
      } else {
        waitMessage.textContent = "Vous pouvez modifier un pixel";
        waitMessage.style.color = "green";
      }
    }
  } catch (error) {
    console.error(error);
  }
}

// liste des joueurs recents
async function fetchPlayersTable() {
  const uid = uidInput.value;
  if (!uid) return;

  try {
    const response = await fetch(`https://pixel-api.codenestedu.fr/liste-joueurs?uid=${uid}`);
    if (response.ok) {
      const players = await response.json();
      
      const tbody = document.querySelector('#players-table tbody');
      tbody.innerHTML = ''; 
      
      players.forEach(player => {
        const tr = document.createElement('tr');
        
        const dateObj = new Date(player.lastModificationPixel);
        const heure = dateObj.toLocaleTimeString();

        tr.innerHTML = `
          <td>${player.nom}</td>
          <td>Equipe ${player.equipe}</td>
          <td>${heure}</td>
          <td>${player.banned ? '🚫' : '✅'}</td>
        `;
        tbody.appendChild(tr);
      });
    }
  } catch (error) {
    console.error(error);
  }
}

// on synchronise le tout
function syncAll() {
  fetchBoardState();
  fetchWaitTime();
  fetchPlayersTable();
}

// on lance
syncAll();

// toutes les 5 secondes
setInterval(syncAll, 5000);