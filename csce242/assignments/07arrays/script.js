console.log("Javascript is working!");

const mountains = {
    "Asheville": "Asheville, North Carolina",
    "Boone": "Boone, North Carolina",
    "Hot Springs": "Hot Springs, North Carolina",
    "Table Rock": "Table Rock, South Carolina"
};

const deserts = {
    "Mojave Desert": "Las Vegas, Nevada",
    "The Great Basin": "Salt Lake City, Utah",
    "Sonoran Desert": "Tucson, Arizona",
    "Chihuahuan Desert": "Marfa, Texas",
};

const destinationType = document.getElementById("destination-type");
const destinations = document.getElementById("destinations");
const mapContainer = document.getElementById("map-container");
const displayDestinations = (destinationArray) => {
    destinations.innerHTML = "";
    mapContainer.innerHTML = "";
    Object.keys(destinationArray).forEach((destination) => {
        const link = document.createElement("a");
        link.textContent = destination;
        link.classList.add("destination-link");
        link.addEventListener("click", () => {
            showMap(destinationArray[destination]);
    });

    destinations.appendChild(link);
    });
};

const showMap = (location) => {
    mapContainer.innerHTML = `<iframe src="https://www.google.com/maps?q=${encodeURIComponent(location)}&output=embed"loading="lazy"></iframe>`;
};

destinationType.addEventListener("change", () => {
    if (destinationType.value === "mountains") {
        displayDestinations(mountains);
    }
    else if (destinationType.value === "deserts") {
        displayDestinations(deserts);
    }
    else {
        destinations.innerHTML ="";
        mapContainer.innerHTML = "";
    }
});