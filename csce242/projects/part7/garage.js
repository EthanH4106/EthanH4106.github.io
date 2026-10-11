const carsURL = "https://ethanh4106.github.io/csce242/projects/part7/cars.json";

const garageGrid = document.getElementById("garage-grid");
const filterLinks = document.querySelectorAll(".filter-links a");

let allCars = [];

// Load car data from the published JSON file
async function loadCars() {
    try {
        const response = await fetch(carsURL);

        if (!response.ok) {
            throw new Error("Could not load the car data.");
        }

        allCars = await response.json();

        displayCars(allCars);
    } catch (error) {
        console.error("Error loading cars:", error);
        garageGrid.innerHTML = "<p>Sorry, the garage could not load. Please try again later.</p>";
    }
}

// Create and display the car cards
function displayCars(cars) {
    garageGrid.innerHTML = "";

    cars.forEach((car) => {
        const card = document.createElement("div");
        card.classList.add("car-card");
        card.dataset.category = car.category;

        const image = document.createElement("img");
        image.src = car.image;
        image.alt = `${car.year} ${car.make} ${car.model}`;

        const title = document.createElement("p");
        title.textContent = `${car.year} ${car.make} ${car.model}`;

        const description = document.createElement("p");
        description.textContent = car.description;

        card.appendChild(image);
        card.appendChild(title);
        card.appendChild(description);

        garageGrid.appendChild(card);
    });
}

// Filter the cars by category
filterLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();

        const selectedFilter = link.dataset.filter;

        filterLinks.forEach((filterLink) => {
            filterLink.classList.remove("active");
        });

        link.classList.add("active");

        const filteredCars =
            selectedFilter === "all"
                ? allCars
                : allCars.filter(
                    (car) => car.category === selectedFilter
                );

        displayCars(filteredCars);
    });
});

// Start loading the cars
loadCars();