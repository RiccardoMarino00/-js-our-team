const divInfoUsers = document.getElementById("content");
const divInfoUsers2 = document.getElementById("content2");
const divInfoUsers3 = document.getElementById("content3");
const divInfoUsers4 = document.getElementById("content4");
const divInfoUsers5 = document.getElementById("content5");
const divInfoUsers6 = document.getElementById("content6");
// const imgUser = document.querySelector(".img");
// const nameUser = document.querySelector(".content-name");
// const roleUser = document.querySelector(".content-role");
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
    // imgUser.innerHTML = `<img src="./img/wayne-barnett-founder-ceo.jpg" class="card-img-top" alt="">`
    // nameUser.innerHTML = `${users[i].name}`
    // roleUser.innerHTML = `${users[i].role}`



    divInfoUsers.innerHTML = `
    ${users[0].name} &nbsp; &nbsp; &nbsp;
    ${users[0].role} &nbsp; &nbsp; &nbsp;
    <img src="./img/wayne-barnett-founder-ceo.jpg" class="rounded-3" alt=""> &nbsp; &nbsp; &nbsp;
    `
    divInfoUsers2.innerHTML = `
    ${users[1].name} &nbsp; &nbsp; &nbsp;
    ${users[1].role} &nbsp; &nbsp; &nbsp;
    <img src="./img/angela-caroll-chief-editor.jpg" class="rounded-3" alt=""> &nbsp; &nbsp; &nbsp;
    `
    divInfoUsers3.innerHTML = `
    ${users[2].name} &nbsp; &nbsp; &nbsp;
    ${users[2].role} &nbsp; &nbsp; &nbsp;
    <img src="./img/walter-gordon-office-manager.jpg" class="rounded-3" alt=""> &nbsp; &nbsp; &nbsp;
    `
    divInfoUsers4.innerHTML = `
    ${users[3].name} &nbsp; &nbsp; &nbsp;
     ${users[3].role} &nbsp; &nbsp; &nbsp;
    <img src="./img/angela-lopez-social-media-manager.jpg" class="rounded-3" alt=""> &nbsp; &nbsp; &nbsp;
    `
    divInfoUsers5.innerHTML = `
     ${users[4].name} &nbsp; &nbsp; &nbsp;
    ${users[4].role} &nbsp; &nbsp; &nbsp;
    <img src="./img/scott-estrada-developer.jpg" class="rounded-3" alt=""> &nbsp; &nbsp; &nbsp;
    `
    divInfoUsers6.innerHTML = `
    ${users[5].name} &nbsp; &nbsp; &nbsp;
    ${users[5].role} &nbsp; &nbsp; &nbsp;
    <img src="./img/barbara-ramos-graphic-designer.jpg" alt="" class="rounded-3"> &nbsp; &nbsp; &nbsp;
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

