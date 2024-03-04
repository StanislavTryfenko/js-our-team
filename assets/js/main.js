/* Ciao ragazzi,
esercizio di oggi: Our Team
nome repo: js-our-team
Viene fornito un file js in cui è definito un array di oggetti che rappresentano i membri del team.
Ogni membro ha le informazioni necessarie per stampare le relative informazioni: Nome, Ruolo e Foto.
MILESTONE 1:
stampare su console le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
trasformare la stringa foto in una immagine effettiva
BONUS 2:
organizzare i singoli membri in card/schede
Consigli del giorno:
Ragioniamo come sempre a step.
Prima la logica in italiano e poi traduciamo in codice.
console.log() è nostro amico.Buon lavoro! */

const team = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg',
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg',
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg',
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg',
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg',
  },
];


//MILESTONE 1:
//stampare su console le informazioni di nome, ruolo e la stringa della foto

team.forEach(team => log(team.name, team.role, team.image));

function log(name, role, image) {
    console.log(name, role, image);
}

//MILESTONE 2:
//stampare le stesse informazioni su DOM sottoforma di stringhe

team.forEach(team => list(team.name, team.role, team.image));

function list(name, role, image) {

    const li = document.createElement('li');
    
    const liText = document.createTextNode(name + " " + role + " " + image);

    li.appendChild(liText);

    document.getElementById('team_list').appendChild(li);
}


/* BONUS 1:
trasformare la stringa foto in una immagine effettiva       ASSIEME, SINGOLI SONO TROPPO SEMPLICI :(
BONUS 2:
organizzare i singoli membri in card/schede */


team.forEach(team => card(team.name, team.role, team.image));

function card(name, role, image) {
    
    const card = `
                    <div class="col-4">
                    <div class="card" style="width: 18rem;">
                    <img src="./assets/img/${image}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">${role}</h6>
                    </div>
                    </div>
                    </div>`

    document.getElementById('cardbox').innerHTML += card
}
