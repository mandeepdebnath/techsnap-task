let btn = document.querySelector(".toggle");
let icon = document.querySelector(".fa-bars");
let nav = document.querySelector(".show-menu");

btn.onclick = function () {
  if (icon.classList.contains("fa-bars")) {
    icon.classList.replace("fa-bars", "fa-times");
    nav.style.display = "block";
  } else {
    icon.classList.replace("fa-times", "fa-bars");
    nav.style.display = "none";
  }
};
