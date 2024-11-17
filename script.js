const showPopupBtn = document.querySelector(".login-btn");
const hidePopupBtn = document.querySelector(".form-popup .close-btn");

//Show form popup

showPopupBtn.addEventListener("click", () => {
  document.body.classList.toggle("show-popup");
});

// Hide form popup when clicking the close button
hidePopupBtn.addEventListener("click", () => {
  document.body.classList.remove("show-popup");
});

blurOverlay.addEventListener("click", () => {
  document.body.classList.remove("show-popup");
});

console.log(showPopupBtn); // Should log the login button element
console.log(hidePopupBtn); // Should log the close button element
