document.addEventListener("DOMContentLoaded", function () {
    var meetupCards = document.querySelectorAll(".meetup-card");
    meetupCards.forEach(function (card) {
        card.addEventListener("click", function () {
            var url = card.getAttribute("data-url");
            window.location.href = url;
        });
    });
});
const filtro = document.getElementById("filtro");
const filterMenu = document.getElementById("filterMenu");

const slack = document.getElementById("slack");
const participar = document.getElementById("participar");

const notificacao = document.getElementById("notificacao");
const notif = document.getElementById("notif");

const perfil = document.getElementById("perfil");
const user = document.getElementById("user");

// Função para remover destaque de todos os botões
function removeActiveClass(exceptButton) {
    [filtro, slack, notificacao, perfil].forEach((btn) => {
        if (btn !== exceptButton) btn.classList.remove("active");
    });
}

// Função para fechar todas as outras divs
function hideAllMenus(except) {
    if (except !== filterMenu) filterMenu.classList.remove("visible");
    if (except !== participar) participar.classList.remove("visible");
    if (except !== notif) notif.classList.remove("visible");
    if (except !== user) user.classList.remove("visible");
}

// Toggle do filtro
filtro.addEventListener("click", () => {
    hideAllMenus(filterMenu);
    filterMenu.classList.toggle("visible");
    removeActiveClass(filtro);
    filtro.classList.toggle("active");
});

// Toggle do Slack
slack.addEventListener("click", () => {
    hideAllMenus(participar);
    participar.classList.toggle("visible");
    removeActiveClass(slack);
    slack.classList.toggle("active");
});

// Toggle das notificações
notificacao.addEventListener("click", () => {
    hideAllMenus(notif);
    notif.classList.toggle("visible");
    removeActiveClass(notificacao);
    notificacao.classList.toggle("active");
});

// Toggle do perfil
perfil.addEventListener("click", () => {
    hideAllMenus(user);
    user.classList.toggle("visible");
    removeActiveClass(perfil);
    perfil.classList.toggle("active");
});
