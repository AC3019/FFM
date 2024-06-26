let popUpContainer = document.getElementById("popUpContainer");
let popUp = document.getElementById("popUp");
let popUpCreateContainer = document.getElementById("popUpCreateContainer");
let popUpCreate = document.getElementById("popUpCreate");

function openPopUp() {
    popUpContainer.classList.add("open-popUp");
    popUp.classList.add("open-popUp");
}

function openPopUpCreate() {
    popUpContainer.classList.add("open-popUp");
    popUpCreate.classList.add("open-popUp");
}

function closePopUp() {
    popUpContainer.classList.remove("open-popUp");
    popUp.classList.remove("open-popUp");
    popUpCreate.classList.remove("open-popUp");
}