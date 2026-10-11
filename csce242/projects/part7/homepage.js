// Get all of the slideshow images
let slides = document.querySelectorAll(".slide");

let currentSlide = 0;

// Show the first slide
slides[currentSlide].style.display = "block";

// Change slides every 5 seconds
setInterval(function() {
    // Hide the current slide
    slides[currentSlide].style.display = "none";

    // Move to the next slide
    currentSlide++; 

    // If we reach the end, go back to the first slide
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    // Show the new slide
    slides[currentSlide].style.display = "block";

}, 5000);