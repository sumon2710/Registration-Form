function displayCurrentTime() {
    const timeElement = document.getElementById('currentTime');
    const now = new Date();
    const timeStr = now.toLocaleString();
    timeElement.innerText = `Current Time: ${timeStr}`;
}

window.onload = function() {
    displayCurrentTime();
};

const form = document.querySelector("form");
const submitButton = document.getElementById("button");

submitButton.addEventListener("click", function (e) {
    e.preventDefault(); 
    alert("Form Submitted Successfully!");
});
