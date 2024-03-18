const divInfoUsers = document.getElementById("content");
const divInfoUsers2 = document.getElementById("content2");
const divInfoUsers3 = document.getElementById("content3");
const divInfoUsers4 = document.getElementById("content4");
const divInfoUsers5 = document.getElementById("content5");
const divInfoUsers6 = document.getElementById("content6");
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
    divInfoUsers.innerHTML = `
    IL nome è:  ${users[0].name} &nbsp; &nbsp; &nbsp;
    Il ruolo è:  ${users[0].role} &nbsp; &nbsp; &nbsp;
    la foto è: <img src="./img/wayne-barnett-founder-ceo.jpg" alt=""> &nbsp; &nbsp; &nbsp;
    `
    divInfoUsers2.innerHTML = `
    IL nome è:  ${users[1].name} &nbsp; &nbsp; &nbsp;
    Il ruolo è:  ${users[1].role} &nbsp; &nbsp; &nbsp;
    la foto è: <img src="./img/angela-caroll-chief-editor.jpg" alt=""> &nbsp; &nbsp; &nbsp;
    `
    divInfoUsers3.innerHTML = `
    IL nome è:  ${users[2].name} &nbsp; &nbsp; &nbsp;
    Il ruolo è:  ${users[2].role} &nbsp; &nbsp; &nbsp;
    la foto è: <img src="./img/walter-gordon-office-manager.jpg" alt=""> &nbsp; &nbsp; &nbsp;
    `
    divInfoUsers4.innerHTML = `
    IL nome è:  ${users[3].name} &nbsp; &nbsp; &nbsp;
    Il ruolo è:  ${users[3].role} &nbsp; &nbsp; &nbsp;
    la foto è: <img src="./img/angela-lopez-social-media-manager.jpg" alt=""> &nbsp; &nbsp; &nbsp;
    `
    divInfoUsers5.innerHTML = `
    IL nome è:  ${users[4].name} &nbsp; &nbsp; &nbsp;
    Il ruolo è:  ${users[4].role} &nbsp; &nbsp; &nbsp;
    la foto è: <img src="./img/scott-estrada-developer.jpg" alt=""> &nbsp; &nbsp; &nbsp;
    `
    divInfoUsers6.innerHTML = `
    IL nome è:  ${users[5].name} &nbsp; &nbsp; &nbsp;
    Il ruolo è:  ${users[5].role} &nbsp; &nbsp; &nbsp;
    la foto è: <img src="./img/barbara-ramos-graphic-designer.jpg" alt=""> &nbsp; &nbsp; &nbsp;
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

