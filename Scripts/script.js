const loginBox = document.querySelector<HTMLElement>('.login-box');
if (loginBox) {
    loginBox.style.backgroundColor = '#0b5fff';
}

const header = document.querySelector<HTMLElement>('#header');
if (header) {
    header.style.backgroundColor = '#0b5fff';
}

const loginForm = document.getElementById("login-form");

if (loginForm) {
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); 
        window.location.href = "/html/principal.html"; 
    });
}

const filtro = document.getElementById("filtro");
const filterMenu = document.getElementById("filterMenu");

filtro.addEventListener("click", () => {
    filterMenu.classList.toggle("visible");
});

const slack = document.getElementById("slack");
const participar = document.getElementById("participar");

slack.addEventListener("click", () => {
    participar.classList.toggle("visible");
});