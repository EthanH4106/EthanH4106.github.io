const CARS_URL =
    "https://ethanh4106.github.io/csce242/projects/part7/cars.json";

// Load the cars from your published JSON file
async function getCars() {
    const response = await fetch(CARS_URL);

    if (!response.ok) {
        throw new Error("Could not load car data.");
    }

    return await response.json();
}

// Find a specific car by its ID
async function getCarById(id) {
    const cars = await getCars();
    return cars.find((car) => car._id === id);
}

// Get all cars from a certain category
async function getCarsByCategory(category) {
    const cars = await getCars();
    return cars.filter((car) => car.category === category);
}

// Get a certain number of random cars
async function getRandomCars(numberOfCars) {
    const cars = await getCars();

    // Shuffle the cars randomly
    const shuffledCars = [...cars].sort(() => Math.random() - 0.5);

    return shuffledCars.slice(0, numberOfCars);
}

// Display a single car inside a chosen HTML container
function displayCar(car, containerId) {
    const container = document.getElementById(containerId);

    if (!container || !car) {
        return;
    }

    const card = document.createElement("div");
    card.classList.add("car-card");

    const image = document.createElement("img");
    image.src = new URL(car.image, CARS_URL).href;
    image.alt = `${car.year} ${car.make} ${car.model}`;

    const title = document.createElement("h3");
    title.textContent = `${car.year} ${car.make} ${car.model}`;

    const description = document.createElement("p");
    description.textContent = car.description;

    card.append(image, title, description);
    container.appendChild(card);
}

// Display several cars inside a chosen HTML container
function displayCars(cars, containerId) {
    const container = document.getElementById(containerId);

    if (!container) {
        return;
    }

    container.innerHTML = "";

    cars.forEach((car) => displayCar(car, containerId));
}