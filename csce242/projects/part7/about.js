async function showAboutCars() {
    try {
        const cars = await getCars();

        // Select these same three cars every time
        const selectedCars = cars.filter((car) =>
            [8, 9, 10].includes(car._id)
        );

        displayCars(selectedCars, "about-cars");
    } catch (error) {
        console.error("Could not display About page cars:", error);
    }
}

showAboutCars();