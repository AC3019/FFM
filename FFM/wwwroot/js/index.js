let slideshowIndex = 0;
startSlideShow();
function startSlideShow() {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideshowIndex++;
    if (slideshowIndex > slides.length) {
        slideshowIndex = 1;
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideshowIndex - 1].style.display = "block";
    dots[slideshowIndex - 1].className += " active";
    setTimeout(startSlideShow, 4000);
}