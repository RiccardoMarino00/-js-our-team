const divInfoUsers = document.getElementById("content");
const divInfoUsers2 = document.getElementById("content2");
const divInfoUsers3 = document.getElementById("content3");
const divInfoUsers4 = document.getElementById("content4");
const divInfoUsers5 = document.getElementById("content5");
const divInfoUsers6 = document.getElementById("content6");
const imgUser = document.querySelector(".img");
const nameUser = document.querySelector(".name");
const roleUser = document.querySelector(".job");
// Utenti 
const wayne = gnerateUser ("Wayne Barnett", "Founder & CEO", "wayne-barnett-founder-ceo.jpg");
const angela = gnerateUser ("Angela Caroll", "Chief Editor", "angela-caroll-chief-editor.jpg");
const walter = gnerateUser ("Walter Gordon", "Office Manager", "walter-gordon-office-manager.jpg");
const angelaBis = gnerateUser ("Angela Lopez","Social Media Manager","angela-lopez-social-media-manager.jpg");
const scott = gnerateUser ("Scott Estrada","Developer","scott-estrada-developer.jpg");
const barbara = gnerateUser ("Barbara Ramos","Graphic Designer","barbara-ramos-graphic-designer.jpg");
// Dichiaro array vuoto
const users = []
// Pusho dentro array vuoto gli utenti
users.push(wayne, angela, walter, angelaBis, scott, barbara)
// Stampo in console le info per ogni utente
for (let i = 0; i < users.length; i++){
    const currentUser = users[i];
    console.log(currentUser.name, currentUser.role, currentUser.photo)
    // Creo un nuovo elemento per stampare nel DOM le info degli utenti 
    divInfoUsers.innerHTML += `
    <div  class="text-center  border border-warning-subtle border-4 rounded-4 py-2 bg-warning-subtle carta">
                    <div class="img "><img class="rounded-3" src="./img/${users[i].photo}" alt=""></div>
                    <h3 class="name py-2">${users[i].name}</h3>
                    <div class="job py-2 fs-5">${users[i].role}</div>
                </div>
    `
}


// Creo la funzione per generarmi gli utenti
function gnerateUser (newName, newRole, newPhoto) {
   const user = {
    name: newName, //String
    role: newRole, //String
    photo: newPhoto //String
   }
   return user
}

