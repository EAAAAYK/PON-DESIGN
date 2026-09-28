/**header */
window.addEventListener("scroll", function () {
  const header = this.document.querySelector(".header");
  if (this.window.scrollY > 100) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
});

/**hamburger-menu */
document.addEventListener("DOMContentLoaded", () => {
  const hamburgerBtn = document.querySelector(".hamburger-menu");
  const navMenu = document.querySelector(".header-nav");
  const body = document.body;
  let scrollPosition = 0;

  hamburgerBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const isActive = hamburgerBtn.classList.contains("active");

    if (!isActive) {
      scrollPosition = window.pageYOffset;
      body.style.top = `-${scrollPosition}px`;
      body.classList.add("no-scroll");
    } else {
      body.classList.remove("no-scroll");
      body.style.top = "";
      window.scrollTo(0, scrollPosition);
    }

    hamburgerBtn.classList.toggle("active");
    navMenu.classList.toggle("active");
  });
});

/**スクロールトップボタン */
const scrollBtn = document.querySelector(".toTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.classList.add("is-show");
  } else {
    scrollBtn.classList.remove("is-show");
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
