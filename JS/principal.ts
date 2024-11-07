document.addEventListener("DOMContentLoaded", () => {
  // Seleciona todos os elementos com a classe "meetup-card"
  const meetupCards = document.querySelectorAll<HTMLElement>(".meetup-card");

  meetupCards.forEach((card) => {
    card.addEventListener("click", () => {
      // Obtém a URL do atributo data-url do card, garantindo que seja uma string
      const url = card.getAttribute("data-url") as string;
      window.location.href = url;
    });
  });
});
