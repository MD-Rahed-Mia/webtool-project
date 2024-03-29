const menuContainer = document.querySelector(".menu-container");
const menuBtn = document.querySelector(".navbar-menu-icon");

menuBtn.addEventListener("click", () => {
  menuContainer.classList.toggle("active");
});



const themeBtn = document.querySelector(".theme-icon");
themeBtn.addEventListener("click", () => {
  let themeAttr = document.body.getAttribute("data-theme");
  themeAttr == "light"
    ? document.body.setAttribute("data-theme", "dark")
    : document.body.setAttribute("data-theme", "light");
});
