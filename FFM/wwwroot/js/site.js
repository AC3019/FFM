// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
const progressEL = document.getElementById("progress");
const prevEL = document.getElementById("pre");
const nextEL = document.getElementById("next");
const circles = document.querySelectorAll(".circle");
const arrows = document.querySelectorAll(".iconArrow");

let currentActive = 1;
let arrowActive = 0;

nextEL.addEventListener("click", () => {
    currentActive++;
    arrowActive++;

    if (currentActive > circles.length) {
        currentActive = circles.length;
    }

    if (arrowActive > arrows.length) {
        arrowActive = arrows.length;
    }

    update();
});

prevEL.addEventListener("click", () => {
    currentActive--;
    arrowActive--;

    if (currentActive < 1) {
        currentActive = 1;
    }

    if (arrowActive < 0) {
        arrowActive = 0;
    }

    update();
})

function update() {
    circles.forEach((circle, indx) => {
        if (indx < currentActive) {
            circle.classList.add("active");
            /*iconArrow.classList.add("active");*/
        } else {
            circle.classList.remove("active");
            /*iconArrow.classList.remove("active");*/
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