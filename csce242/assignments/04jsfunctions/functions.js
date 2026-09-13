// Speech
const speechColumn = document.querySelector("#speech-column");
const speechBubble = document.querySelector("#speech-bubble");

const showSpeech = () => {
    speechBubble.style.display = "block";
};

speechColumn.addEventListener("click", showSpeech);

// Beverage

const beverage = document.querySelector("#beverage");
const beverageOutput = document.querySelector("#beverage-output");

const showBeverage = () => {
    const selectedBeverage = beverage.value;

    beverageOutput.textContent = `${selectedBeverage}: Nice Choice!`;
};

beverage.addEventListener("change", showBeverage);

// Sticker
const sun = document.querySelector("#sun");
const sticker = document.querySelector("#sticker");

const addSticker = () => {
    sticker.style.display = "block";
};

sun.addEventListener("click", addSticker);