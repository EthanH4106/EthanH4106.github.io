// Get all filter links and car cards
const filterLinks = document.querySelectorAll(".filter-links a");
const carCards = document.querySelectorAll(".car-card");

// Change the cars when a filter is clicked
filterLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();

        // Get the selected category
        const selectedFilter = link.dataset.filter;

        // Update the active filter
        filterLinks.forEach((filterLink) => {
            filterLink.classList.remove("active");
        });

        link.classList.add("active");

        // Show matching cars
        carCards.forEach((card) => {
            const carCategory = card.dataset.category;

            if (
                selectedFilter === "all" ||
                carCategory === selectedFilter
            ) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }
        });
    });
});