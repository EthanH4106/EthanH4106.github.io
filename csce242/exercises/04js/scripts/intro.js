//Shows a message when the button is clicked
document.getElementById("btn-show-message").onclick = (e) => {
    document.getElementById("p-message").innerHTML = "Hello World";
    e.target.innerHTML = "done!";
};

//styles the link when it's clicked
document.getElementById("link").onclick = (e) => {
    e.preventDefault(); //don't go to links destination
    e.target.classList.add("cool-link");
};

//when button clicked make ball bounce
document.getElementById("btn-bounce").onclick = (e) => {
    document.getElementById("ball").classList.toggle("bouncing-ball");
}

//when you change the number of days since you watered your plant
//show a message and change the image
document.getElementById("txt-num-days").onkeyup = (e) => {
    const numDays = parseInt(e.target.value);
    const pMessage = document.getElementById("p-plant-msg");
    pMessage.innerHTML =numDays;
    const plantImage = document.getElementById("img-plant");
    plantImage.classList.remove("hidden");

    if (numDays <= 2){
        pMessage.innerHTML = `Let your plant rest it's only been ${numDays} day(s)`;
        plantImage.src="https://www.dummyimage.com/150x150/28f211/fff&text=Happy+Plant";
    } else if(numDays <= 5){
        pMessage.innerHTML = `Time to water it's been ${numDays} day(s)`;
        plantImage.src="https://www.dummyimage.com/150x150/d9d020/fff&text=Wilting+Plant";
    } else if(numDays <= 7){
        pMessage.innerHTML = `Oh no your plant is wilting it's been ${numDays} day(s)`;
        plantImage.src="https://www.dummyimage.com/150x150/b07f1e/fff&text=Very+Wilted+Plant";
    } else {
        pMessage.innerHTML = "Your plant is a goner";
        plantImage.src="https://www.dummyimage.com/150x150/000000/fff&text=Very+Dead+Plant";
    } 
}

//Counting
let countInterval;
let count = 0;
const pCount = document.getElementById("p-count");
const btnStart =document.getElementById("btn-start");

btnStart.onClick = () => 
document.getElementById("btn-start").onclick = () => {
    countInterval = setInterval(()=>{
        count++;
        pCount.innerHTML = ++count;
    },500);
}
btnPause.onClick = () =>
document.getElementById("btn-pause").onclick = () => {
    clearInterval(countInterval);
}
btnStop.onClick = () => 
document.getElementById("btn-stop").onclick = () => {
    count = 0;
    pCount.innerHTML = "";
    clearInterval(countInterval);
}

//date display
setInterval(() => {
    const pDisplay = document.getElementById("date-display");

    const today = new Date();
    const second = today.getSeconds();
    pDisplay.innerHTML = seconds;
}, 1000);