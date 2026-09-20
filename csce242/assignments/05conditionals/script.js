/* Mobile Menu */
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

menuToggle.onclick = function() {
    menu.classList.toggle("show");
    if (menu.classList.contains("show")) {
        menuToggle.textContent = "▲";
    }
    else {
        menuToggle.textContent = "▼";
    }
};

/* Exercise Switching */
const exercise1Link = document.getElementById("exercise1Link");
const exercise2Link = document.getElementById("exercise2Link");
const exercise1 = document.getElementById("exercise1");
const exercise2 = document.getElementById("exercise2")

/* Show Exercise 1 */
exercise1Link.onclick = function() {
    exercise1.style.display = "block";
    exercise2.style.display = "none";
};

exercise2Link.onclick = function() {
    exercise1.style.display = "none";
    exercise2.style.display = "block";
    calculateDaysLeft();
};

/* Exercise 1 Missing Class Point Deduction */
const missedDays = document.getElementById("missed-days");

missedDays.oninput = function() {
    const days = Number(missedDays.value);

    /* There are approximately 25 classes in a semester. Attendance is worth 7% of the grade. */

    const percentOfClassesMissed = days / 25;
    const gradeDeduction = percentOfClassesMissed * 7;

    /* Display the deduction */
    document.getElementById("deduction-result").textContent =
        "You will lose " + gradeDeduction.toFixed(1) + "% for skipping " + days + " days.";

    /* Messages based on number of days */
    const message = document.getElementById("attendance-message");

    if (days <= 1) {
        message.textContent = "You are doing a great job keeping up with the class";
    }

    else if (days <= 3) {
        message.textContent = "A few missed classes should be managable, but stay on track.";
    }

    else if (days <= 5) {
        message.textContent = "You are starting to miss a significant amount of class.";
    }

    else {
        message.textContent = "That is a lot of missed class! You may want to reconsider.";
    }
};

/* Exercise 2 End of Sememster Counter */
function calculateDaysLeft() {
    /* Get today's date */
    const today = new Date();

    /* December is month 11 because JavaScript starts counting months at 0. */
    let semesterEnd = new Date(today.getFullYear(), 11, 4);

    /* If December 4 has already passed, use December 4 of next year. */
    if (today > semesterEnd) {
        semesterEnd = new Date(today.getFullYear() + 1, 11, 4);
    }

    /* Calculate the difference */
    const difference = semesterEnd.getTime() - today.getTime();

    /* Convert milliseconds into days */
    const days = Math.ceil(difference / (1000 * 60 * 60 *24));

    /* Display the number of days */
    document.getElementById("days-left").textContent = "You have " + days + " days left in the semester.";

    /* Get the message element */
    const message = document.getElementById("semester-message");

    /* Messages based on number of days */
    if (days > 100) {
        message.textContent = "You have plenty of time! No need to panic yet.";
    }

    else if (days > 50) {
        message.textContent = "The semester is moving along. Keep pushing!"
    }

    else if (days > 20) {
        message.textContent = "The finish line is getting closer! Stay focused.";
    }

    else {
        message.textContent = "Almost there! Finish the sesmester strong!";
    }
}