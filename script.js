// Fonction pour afficher/masquer le menu des versions
function toggleVersions(menuId) {
    var menu = document.getElementById(menuId);
    
    // Si le menu est déjà visible, on le cache
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        // Sinon, on l'affiche
        menu.style.display = "block";
    }
}

// Fonction pour changer de slide (carrousel)
let slideIndex = 0;

function showSlides() {
    let slides = document.querySelectorAll('.carousel-item');
    if (slideIndex >= slides.length) { slideIndex = 0; }
    if (slideIndex < 0) { slideIndex = slides.length - 1; }

    const newTransformValue = -slideIndex * 100; // Chaque carte prend 100% de la largeur
    document.querySelector('.carousel-container').style.transform = `translateX(${newTransformValue}%)`;
}

function moveSlide(n) {
    slideIndex += n;
    showSlides();
}

document.addEventListener("DOMContentLoaded", () => {
    showSlides();
});
