const menuContainer = document.querySelector(".menu-container");
const menuBtn = document.querySelector(".navbar-menu-icon");

menuBtn.addEventListener("click", () => {
  menuContainer.classList.toggle("active");
});
