const img = document.querySelector(".curv-img");

const inputFifth = document.querySelector(".input-fifth");
const btnGetStarted = document.querySelector(".btn-get-started");

let desktop = window.matchMedia("(max-width: 1329px)");
let mobile = window.matchMedia("(max-width: 375px)");

/* events */
eventListeners();

function eventListeners() {
  document.addEventListener("DOMContentLoaded", sizeWindow);

  desktop.addEventListener("change", adaptView);
  mobile.addEventListener("change", adaptView);

  inputFifth.addEventListener("blur", checkEmail);
  btnGetStarted.addEventListener("onclick", checkEmail);
}

/* functions */

function sizeWindow() {
  if (screen.width < 376) {
    mobileStyle();
  } else if (screen.width >= 1329){
    deskStyle();
  }
}

function adaptView(e) {
  img.src = "";
  if (e.media.includes(375)) {
    mobileStyle();
  } else if (e.media.includes(1329)) {
    deskStyle();
  }
}

function mobileStyle() {
  img.src = "./assets/images/bg-curvy-mobile.svg";
  img.style.width = "375px";
  img.style.height = "150px";
  img.style.top = "300px";
  img.style.left = "0px";
}

function deskStyle() {
  img.src = "./assets/images/bg-curvy-desktop.svg";
  img.style.width = "1310px";
  img.style.top = "780px";
  img.style.height = "450px";
  img.style.left = "28px";
}

function checkEmail(e) {
  const emailCheck = document.querySelector(".email-check");
  let email = e.target.value;

  if (email.length > 0) {
    if (isValidEmail(email)) {
      emailCheck.textContent = "";
    } else {
      emailCheck.textContent = "Please enter a valid email address";
      emailCheck.style.color = "hsl(0, 100%, 63%)";
      emailCheck.style.fontSize = "10px";

      setTimeout(() => {
        emailCheck.textContent = ""
      }, 3000);
    }
  }
}

const isValidEmail = (email) => {
  return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
    email
  );
};
