const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", function () {

    const query = this.value.toLowerCase().trim();

    const cards = document.querySelectorAll(".music-card");

    cards.forEach(card => {

        const title = card
            .querySelector("h3")
            .textContent
            .toLowerCase();

        const artist = card
            .querySelector("p")
            .textContent
            .toLowerCase();

        if (
            title.includes(query) ||
            artist.includes(query)
        ) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }

    });

});