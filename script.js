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
    currentIndex = (currentIndex + 1) % totalSlides; // цикл на последний слайд
    updateSlider();
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // цикл на первый слайд
    updateSlider();
});

(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
      document.body.classList.toggle("no-scroll");
    }
  })();

  function openMenu() {
    document.getElementById("sidebar").style.left = "0";
    document.getElementById("main").style.marginLeft = "250px"; // Смещение основного контента
}

function closeMenu() {
    document.getElementById("sidebar").style.left = "-250px"; // Скрыть меню
    document.getElementById("main").style.marginLeft = "0"; // Вернуть основной контент
}

