// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

/*const { each } = require("jquery");*/

// Write your JavaScript code.
const progressEL = document.getElementById("progress");
const prevEL = document.getElementById("pre");
const nextEL = document.getElementById("next");
const circles = document.querySelectorAll(".circle");
const arrows = document.querySelectorAll(".iconArrow");
const pages = document.querySelectorAll(".create-step");

let currentActive = 0;
let arrowActive = 0;
let pageActive = 0;

nextEL.addEventListener("click", () => {
    currentActive++;
    arrowActive++;
    pageActive++;
    
    if (currentActive > circles.length-1) {
        currentActive = circles.length-1;
    }

    if (arrowActive > arrows.length) {
        arrowActive = arrows.length;
    }

    update();
    updatePageStep();
});

prevEL.addEventListener("click", () => {
    currentActive--;
    arrowActive--;
    pageActive--;

    if (currentActive < 0) {
        currentActive = 0;
    }

    if (arrowActive < 0) {
        arrowActive = 0;
    }

    update();
    updatePageStep();
})

function update() {
    circles.forEach((circle, indx) => {
        if (indx < currentActive) {
            circle.classList.add("active");
            /*iconArrow.classList.add("active");*/
        } else {
            circle.classList.remove("active");
            /*pages.classList.remove("create-step-active");*/
        }

        arrows.forEach((iconArrow, indx) => {
            if (indx < arrowActive) {
                iconArrow.classList.add("iconActive");
            } else {
                iconArrow.classList.remove("iconActive");
            }
        });

        const activies = document.querySelectorAll(".active");

        progressEL.style.width = ((activies.length - 1) / (circles.length - 1)) * 80 + "%";
    });
}

function updatePageStep() {
    pages.forEach((page) => {
        page.classList.contains("create-step-active") &&
            page.classList.remove("create-step-active");
    });

    pages[pageActive].classList.add("create-step-active");
}