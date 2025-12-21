 let reducedTransp = false;
let reduceTransBtn = document.querySelector(".reduceTransBtn");
let settingsModal = document.querySelector(".settingsModal");
let settingsClose = document.querySelector(".settingsClose");
let increTransBtn = document.querySelector(".increTransBtn")
let mainItem = document.querySelectorAll(".main-item");
let settingsBtn = document.querySelector(".settingsBtn");
let searchModal = document.querySelector(".searchModal");
let sidebar = document.querySelector(".sidebar"); //sidebar-link
// let sidebarLink = document.querySelector(".sidebar-link");

let increaceTransp = () => {
    reducedTransp = false;
    settingsModal.style.background = "none";
    searchModal.style.background = "none";
     sidebar.style.background = "none";
    mainItem.forEach(item => item.style.background = "linear-gradient(to top, #cfecff2b, #ffffff00)");


    localStorage.setItem("TranspIsOn", 0)
}

let reduceTrans = () => {
    reducedTransp = true;
    settingsModal.style.background = "white";
    searchModal.style.background = "white";
    sidebar.style.background = "white";

    mainItem.forEach(item => item.style.background = "linear-gradient(to top, #cfecff, rgba(255, 255, 255, 1))");

    localStorage.setItem("TranspIsOn", 1)
}

function loadState() {
    let getreducedTransp = localStorage.getItem("TranspIsOn");
    if (getreducedTransp !== null && getreducedTransp == 1) {
        reducedTransp = JSON.parse(getreducedTransp);
        console.log(reducedTransp);
        reduceTrans();
    } else {
        increaceTransp()
    }
}

function closeStngs() {
    settingsModal.style.display = "none";
}

function openStngs() {
    settingsModal.style.display = "block";
}

loadState();
reduceTransBtn.addEventListener("click", reduceTrans);
settingsClose.addEventListener("click", closeStngs);
settingsBtn.addEventListener("click", openStngs);
increTransBtn.addEventListener("click", increaceTransp);