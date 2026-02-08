let lightModeBtn = document.querySelector(".lightModeBtn");
let darkModeBtn = document.querySelector(".darkModeBtn");
let cardTitle = document.querySelector(".card-title");
let body = document.querySelector(".b");

let darkMode = () => {
body.style.color = "white";
body.style.cardTitle = "white";
body.style.a = "white";
body.style.h3 = "white";
body.style.h4 = "white";
body.style.h5 = "white";
body.style.bbackground = "linear-gradient(to top, #19374a, #3d657f, #000000)";
console.log("Click!");

}

darkModeBtn.addEventListener("click", darkMode)