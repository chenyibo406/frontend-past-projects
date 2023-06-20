const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

// add sign-up-mode and remove sign-up-mode

// CSS
// .container.sign-up-mode .left-panel {
//   pointer-events: none;
// }

// .container.sign-up-mode .right-panel {
//   pointer-events: all;
// }
