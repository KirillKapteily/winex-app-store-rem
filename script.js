const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;
const totalSlides = images.length;

function updateSlider() {
    slides.style.transform = `translateX(${-currentIndex * 100}%)`;
}

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides; 
    updateSlider();
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; 
    updateSlider();
});

  function openMenu() {
    document.getElementById("sidebar").style.left = "0";
    document.getElementById("main").style.marginLeft = "250px"; 
}

function closeMenu() {
    document.getElementById("sidebar").style.left = "-250px"; 
    document.getElementById("main").style.marginLeft = "0"; 
}

