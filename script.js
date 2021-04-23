const map = document.querySelector(".modal-map");
const button = document.querySelector(".map-button");
const closeBtn = document.querySelector(".modal-close");
const link = document.querySelector(".map-link");
const loginBtn = document.querySelector(".login-button");
const loginScreen = document.querySelector(".modal-login");

document.addEventListener("click", (e) => {
  if (e.target === button || e.target === link) {
    e.preventDefault();
    map.style.display = "block";
  }
  if (e.target === closeBtn) {
    map.style.display = "none";
  }
  if (e.target === loginBtn) {
    e.preventDefault();
    loginScreen.style.display = "block";
  }
});
