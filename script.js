let slideIndex = 0;

function showSlides() {
    let slides = document.querySelectorAll('.carousel-item');
    if (slideIndex >= slides.length) { slideIndex = 0; }
    if (slideIndex < 0) { slideIndex = slides.length - 1; }

    const newTransformValue = -slideIndex * 330; // 330px est la largeur de chaque carte + marges
    document.querySelector('.carousel-container').style.transform = `translateX(${newTransformValue}px)`;
}

function moveSlide(n) {
    slideIndex += n;
    showSlides();
}

document.addEventListener("DOMContentLoaded", () => {
    showSlides();
});
