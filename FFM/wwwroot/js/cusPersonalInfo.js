let popUpContainer = document.getElementById("popUpContainer");
let popUp = document.getElementById("popUp");

function openPopUp() {
    popUpContainer.classList.add("open-popUp");
    popUp.classList.add("open-popUp");
}

function closePopUp() {
    popUpContainer.classList.remove("open-popUp");
    popUp.classList.remove("open-popUp");
}