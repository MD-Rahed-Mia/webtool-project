const menuContainer = document.querySelector(".menu-container");
const menuBtn = document.querySelector(".navbar-menu-icon");

menuBtn.addEventListener("click", () => {
  menuContainer.classList.toggle("active");
});

function setTheme() {
  const theme = localStorage.getItem("theme");
  document.body.setAttribute("data-theme", theme);
}
setTheme();

const themeBtn = document.querySelector(".theme-icon");

themeBtn.addEventListener("click", () => {
  const theme = localStorage.getItem("theme");
  if (theme == "light") {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }

  location.reload(true);
});
