let themeBlack = document.querySelector(".themeBlack");
let darkTheme = document.querySelector(".dark-theme");
let black = () => {
    darkTheme.style.backgroundImage = "url(../../images/backkvlack.svg)";
   darkTheme.style.color = "white";
}
themeBlack.addEventListener("click", black);
