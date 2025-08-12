let progs = {
    Firefox: "./html/firefoxdownloadpagelinux.html",
    "Google Chrome": "./html/googlechromedownloadlinux.html",
    "Microsift Edge": "./html/msedgedownloadlinux.html",
    Opera: "./html/operadowlinux.html",
    Telegram: "./html/telegramdownloadlinux.html",
    Discord: "./html/discorddownloadlinux.html",
    Viber: "./html/viberdowlinux.html",
    Spotify: "./html/spotifydownloadlinux.html",
    "Visual Studio Code": "./html/vscodedownload.html",
    "GitHub Desktop": "./html/githubdownloadlinux.html",
    "Arduino IDE": "./html/arduinolinux.html",
    AnyDesk: "./html/anydeskdownloadlinux.html",
    Docker: "./html/dockerlinux.html",
    Zoom: "./html/zoomdowlinux.html",
    VLC: "./html/vlclinux.html",
    OBS: "./html/obsdownlinux.html",
    Gimp: "./html/gimplinux.html",
    Wine: "./html/winelinux.html"
};

let searchBar = document.querySelector(".searchBar");
let nameAr = document.querySelectorAll(".card-title");
const array = Array.from(nameAr);
const names = array.map(element => element.textContent.trim());

let searching = () => {
    let text = searchBar.value.trim();
    const existingModal = document.querySelector(".searchModal");
    if (existingModal) existingModal.remove();

    if (names.includes(text) && progs[text]) {
        const href = progs[text];
        const div = document.createElement("div");
        div.classList.add("searchModal");

        div.innerHTML = `<ul class="main-list">
            <li class="main-item">
                <a href="${href}" class="main-link">
                    <img class="img" src="images/${text.toLowerCase().replace(/\s/g, '')}.svg" alt="${text}" width="119">
                    <h3 class="card-title">${text}</h3>
                </a>
            </li>
        </ul>`;

        document.body.appendChild(div);
    } else if (names.includes(text) || progs[text]) {
        const href = progs[text];
        const div = document.createElement("div");
        div.classList.add("searchModal");

        div.innerHTML = `<ul class="main-list">
            <li class="main-item">
                <a href="${href}" class="main-link">
                    <img class="img" src="images/${text.toLowerCase().replace(/\s/g, '')}.svg" alt="${text}" width="119">
                    <h3 class="card-title">${text}</h3>
                </a>
            </li>
        </ul>`;

        document.body.appendChild(div);
    }
}

searchBar.addEventListener("input", searching);
