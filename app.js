const slides = document.querySelectorAll('.slide');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let currentIndex = 0;

function updateSlides() {
    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentIndex);
        slide.classList.toggle('hidden', index !== currentIndex);
    });
    // Mueve el contenedor de las imágenes
    document.getElementById('slides').style.transform = `translateY(-${currentIndex * 100}vh)`;
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
    updateSlides();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
    updateSlides();
});


