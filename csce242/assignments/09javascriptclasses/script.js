class Vacation {

    constructor(title, type, description, thingsToDo, image, mapSrc) {
        this.title = title;
        this.type = type;
        this.description = description;
        this.thingsToDo = thingsToDo;
        this.image = image;
        this.mapSrc = mapSrc;
    }

    getCard() {

        const card = document.createElement("section");

        card.classList.add("vacation-card");

        card.innerHTML = `
            <h3>${this.title}</h3>
            <p>${this.type} Vacation</p>
            <img src="${this.image}" alt="${this.title}">
        `;

        card.onclick = () => {
            showModal(this);
        };

        return card;
    }
}

const vacations = [

    new Vacation(
        "Asheville",
        "Mountain",
        "A beautiful mountain city surrounded by the Blue Ridge Mountains.",
        "Visit the Biltmore Estate, hike the Blue Ridge Parkway, and explore downtown.",
        "images/asheville.webp",
        "https://www.google.com/maps?q=Asheville%2C%20NC&output=embed"
    ),

    new Vacation(
        "Boone",
        "Mountain",
        "A scenic college town in the Blue Ridge Mountains with beautiful hiking and skiing.",
        "Go skiing, visit Appalachian State University, and hike Grandfather Mountain.",
        "images/boone.webp",
        "https://www.google.com/maps?q=Boone%2C%20NC&output=embed"
    ),

    new Vacation(
        "Hot Springs",
        "Mountain",
        "A small mountain town known for its relaxing atmosphere and outdoor activities.",
        "Go hiking, visit the hot springs, and explore the Appalachian Trail.",
        "images/hot-springs.jpg",
        "https://www.google.com/maps?q=Hot%20Springs%2C%20NC&output=embed"
    ),

    new Vacation(
        "Table Rock",
        "Mountain",
        "A scenic mountain destination with impressive rock formations and hiking trails.",
        "Hike to the summit, explore the trails, and enjoy mountain views.",
        "images/table-rock.webp",
        "https://www.google.com/maps?q=Table%20Rock%2C%20SC&output=embed"
    ),

    new Vacation(
        "Sunset Beach",
        "Beach",
        "A peaceful North Carolina beach known for beautiful sunsets and relaxing beaches.",
        "Relax on the beach, watch the sunset, and walk along the pier.",
        "images/sunset-beach.jpg",
        "https://www.google.com/maps?q=Sunset%20Beach%2C%20NC&output=embed"
    ),

    new Vacation(
        "Edisto Beach",
        "Beach",
        "A quiet coastal destination with beautiful beaches and a relaxed atmosphere.",
        "Go swimming, walk the beach, and explore Edisto Island.",
        "images/edisto.webp",
        "https://www.google.com/maps?q=Edisto%20Beach%2C%20SC&output=embed"
    ),

    new Vacation(
        "Oak Island",
        "Beach",
        "A family-friendly coastal destination with wide beaches and scenic views.",
        "Go fishing, swim in the ocean, and visit the Oak Island Lighthouse.",
        "images/oak-island.jpg",
        "https://www.google.com/maps?q=Oak%20Island%2C%20NC&output=embed"
    ),

    new Vacation(
        "Pawleys Island",
        "Beach",
        "A relaxing South Carolina beach destination known for its beautiful coastline.",
        "Relax on the beach, go fishing, and explore the local shops.",
        "images/pawleys.webp",
        "https://www.google.com/maps?q=Pawleys%20Island%2C%20SC&output=embed"
    )

];

// Add vacations to the page

const vacationList = document.getElementById("vacation-list");

vacations.forEach((vacation) => {
    vacationList.appendChild(vacation.getCard());
});

// Show modal

function showModal(vacation) {

    document.getElementById("modal-title").textContent =
        vacation.title;

    document.getElementById("modal-type").textContent =
        vacation.type;

    document.getElementById("modal-description").textContent =
        vacation.description;

    document.getElementById("modal-things").textContent =
        vacation.thingsToDo;

    document.getElementById("vacation-map").src =
        vacation.mapSrc;

    document.getElementById("vacation-modal").style.display =
        "block";
}

// Close modal

document.getElementById("close-modal").onclick = () => {

    document.getElementById("vacation-modal").style.display =
        "none";

};

// Close modal when clicking outside

window.onclick = (event) => {

    const modal = document.getElementById("vacation-modal");

    if (event.target === modal) {
        modal.style.display = "none";
    }

};