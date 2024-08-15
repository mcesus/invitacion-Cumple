let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-images img');
    if (index >= slides.length) currentIndex = 0;
    if (index < 0) currentIndex = slides.length - 1;
    document.querySelector('.carousel-images').style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    currentIndex++;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex--;
    showSlide(currentIndex);
}

// Auto-play (opcional)
// setInterval(nextSlide, 3000);

// Soporte de gestos para dispositivos móviles
const carousel = document.querySelector('.carousel');
let startX;

carousel.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

carousel.addEventListener('touchend', (e) => {
    const endX = e.changedTouches[0].clientX;
    if (startX > endX + 50) nextSlide();
    if (startX < endX - 50) prevSlide();
});
