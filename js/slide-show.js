/**スライドショー */
document.addEventListener("DOMContentLoaded", () => {
  const slideItems = document.querySelectorAll(".works-slide-list__item");
  const dots = document.querySelectorAll(".works-indicator__dot");
  const prevBtn = document.querySelector(".works-nav-prev");
  const nextBtn = document.querySelector(".works-nav-next");

  let currentIndex = 0;
  let timer;
  const intervalTime = 5000;

  function updateSlides(index) {
    if (index >= slideItems.length) currentIndex = 0;
    else if (index < 0) currentIndex = slideItems.length - 1;
    else currentIndex = index;

    slideItems.forEach((item) => item.classList.remove("active"));
    dots.forEach((dot) => dot.classList.remove("active"));

    slideItems[currentIndex].classList.add("active");
    dots[currentIndex].classList.add("active");
  }
  function startTimer() {
    timer = setInterval(() => {
      updateSlides(currentIndex + 1);
    }, intervalTime);
  }

  function resetTimer() {
    clearInterval(timer);
    startTimer();
  }

  nextBtn.addEventListener("click", () => {
    updateSlides(currentIndex + 1);
    resetTimer();
  });

  prevBtn.addEventListener("click", () => {
    updateSlides(currentIndex - 1);
    resetTimer();
  });

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      updateSlides(i);
      resetTimer();
    });
  });

  startTimer();
});
