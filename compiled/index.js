"use strict";
const cards = document.querySelectorAll("div.card");
const removeActiveClasses = () => {
    cards.forEach((card) => {
        card.classList.remove("active");
    });
};
const addActiveClass = (elt) => {
    removeActiveClasses();
    elt.classList.add("active");
};
const expandSibling = (elt) => {
    removeActiveClasses();
    elt.nextElementSibling !== null
        ? addActiveClass(elt.nextElementSibling)
        : addActiveClass(elt.previousElementSibling);
};
cards.forEach((card) => {
    card.addEventListener("click", () => {
        card.classList.contains("active")
            ? expandSibling(card)
            : addActiveClass(card);
    });
});
