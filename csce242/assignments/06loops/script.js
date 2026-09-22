const cars = document.getElementById("cars");

const colors = [
    "#5b52a3", "#f47d63", "#29c4b6", "#a9e84c", "#381568", "#b06fc1", "#b8e3f5"
];

/* Creates a car using multiple parameters: x = horizontal position lane = which lane the car is in color = car color */
const addCar = (x, lane, color) => {
    const car = document.createElement("div");
    car.classList.add("car");

    car.style.left = `${x}px`;
    car.style.top = `${lane}px`;

    const body = document.createElement("div");
    body.classList.add("car-body");
    body.style.backgroundColor = color;

    const window = document.createElement("div");
    window.classList.add("car-window");

    const leftWheel = document.createElement("div");
    leftWheel.classList.add("wheel", "wheel-left");

    const rightWheel = document.createElement("div");
    rightWheel.classList.add("wheel", "wheel-right");

    body.appendChild(window);
    body.appendChild(leftWheel);
    body.appendChild(rightWheel);
    car.appendChild(body);
    cars.appendChild(car);
}

/* Creates multiple cars when the page loads */
const loadCars = () => {
    for (let i = 0; i < 8; i++) {
        const x = Math.random() * (window.innerWidth - 100);

        // Randomly choose the top or bottom lane
        const lane = Math.random() < 0.5 ? 15 : 80;

        //Choose a random color
        const color = colors[Math.floor(Math.random() * colors.length)];

        addCar(x, lane, color);
    }
};

loadCars();