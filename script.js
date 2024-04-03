const navEl = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 56) {
    navEl.classList.add("navbar-scrolled");
  } else {
    navEl.classList.remove("navbar-scrolled");
  }
});
$(".carousel").carousel({
  interval: 2000, // Adjust the interval (in milliseconds) for automatic sliding
});
