const BTN_EMAIL = document.querySelector('#btnEmail');
const CORREO = document.querySelector('#correoUser');
const NAME = document.querySelector('#nameUser');
const AVATAR = document.querySelector('#avatarUser');

window.addEventListener("load", ()=> {
    fetch('https://randomuser.me/api/')
        .then(data => data.json())
        .then(data => {
            AVATAR.innerHTML = `
                <img class="img-user" src="${data.results['0'].picture.large}" alt="foto user">
            `;
            CORREO.innerHTML = `
                <p class="text-s">${data.results['0'].email}</p> 
            `;
            NAME.innerHTML = `
                <p class="text-s">${data.results['0'].name.title} ${data.results['0'].name.first} ${data.results['0'].name.last}</p> 
            `;
        })
        .catch( error => {
            alert("Usuario no encontrado.");
            console.log(error);
        });
});

BTN_EMAIL.addEventListener("click", ()=>{
    fetch('https://randomuser.me/api/')
        .then(data => data.json())
        .then(data => {
            AVATAR.innerHTML = `
                <img class="img-user" src="${data.results['0'].picture.large}" alt="foto user">
            `;
            CORREO.innerHTML = `
                <p class="text-s">${data.results['0'].email}</p> 
            `;
            NAME.innerHTML = `
                <p class="text-s">${data.results['0'].name.title} ${data.results['0'].name.first} ${data.results['0'].name.last}</p> 
            `;
        })
        .catch( error => {
            alert("Usuario no encontrado.");
            console.log(error);
        });
});