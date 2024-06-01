const cards: NodeListOf<HTMLDivElement> =
  document.querySelectorAll("div.card")!;

const removeActiveClasses = () => {
  cards.forEach((card: HTMLDivElement): void => {
    card.classList.remove("active");
  });
};
const addActiveClass = (elt: HTMLDivElement): void => {
  removeActiveClasses();
  elt.classList.add("active");
};
const expandSibling = (elt: HTMLDivElement): void => {
  removeActiveClasses();
  elt.nextElementSibling !== null
    ? addActiveClass(elt.nextElementSibling as HTMLDivElement)
    : addActiveClass(elt.previousElementSibling as HTMLDivElement);
};

cards.forEach((card: HTMLDivElement): void => {
  card.addEventListener("click", () => {
    card.classList.contains("active")
      ? expandSibling(card)
      : addActiveClass(card);
  });
});
