document.addEventListener("DOMContentLoaded", function () {
    // Seleciona todos os elementos com a classe "meetup-card"
    var meetupCards = document.querySelectorAll(".meetup-card");
    meetupCards.forEach(function (card) {
        card.addEventListener("click", function () {
            // Obtém a URL do atributo data-url do card, garantindo que seja uma string
            var url = card.getAttribute("data-url");
            window.location.href = url;
        });
    });
});
