

const filterButtons = document.querySelectorAll("#filter-buttons li");
const filterableCards = document.querySelectorAll("#filterable-cards .card");

const filterCardsA = (e) => {
    document.querySelector("#filter-buttons .active").classList.remove("active");
    e.target.classList.add("active");
    filterableCards.forEach(card => {
        if (card.dataset.name === e.target.dataset.filter || e.target.dataset.filter === "all") {
            return card.classList.replace("hide", "show");
        }
        card.classList.add("hide");
    });
}

filterButtons.forEach(li => li.addEventListener("click", filterCardsA));