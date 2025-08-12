let progs = {
    Firefox: "./html/firefoxdownloadpage.html",
    "Google Chrome": "./html/googlechromedownload.html",
    Supermium: "./html/supermiumdownload.html",
    "Microsift Edge": "./html/msedgedownload.html",
    Opera: "./html/operadown.html",
    Telegram: "./html/telegramdownload.html",
    Discord: "./html/discorddownload.html",
    Viber: "./html/viberdow.html",
    WhatsApp: "./html/whatsapp.html",
    Teams: "./html/teams.html",
    Instagram: "./html/insta.html",
    FaceBook: "./html/facebook.html",
    Threads: "./'html/threads.html",
    "Apple Music": "./html/applemusicdow.html",
    Spotify: "./html/spotifydownload.html",
    "Apple TV": "./html/appletv.html",
    Netflix: "./html/netflix.html",
    Hulu: "./html/hulu.html",
    Dropbox: "./html/dropboxdownload.html",
    "Google Drive": "./html/googledrivedownload.html",
    OneDrive: "./html/onedrivedow.html",
    Steam: "./html/steamdow.html",
    EpicGames: "./html/epicgamesdow.html",
    "Visual Studio Code": "./html/vscodedownload.html",
    GitHubDesktop: "./html/githubdownload.html",
    GitBash: "./html/gitbash.html",
    ArduinoIDE: "./html/arduino.html",
    Malwarebytes: "./html/malwarebytesd.html",
    Bitdefender: "./html/bitdefender.html",
    Avast: "./html/avast.html",
    AnyDesk: "./html/anydeskdownload.html",
    Appledevices: "./html/appledevi.html",
    Docker: "./html/docker.html",
    "Microsoft PC Manager": "./html/mspcmgr.html",
    Evernote: "./html/evernote.html",
    Zoom: "./html/zoomdow.html",
    VLC: "./html/vlc.html",
    OBS: "./html/obsdown.html",
    Bandicam: "./html/bandicam.html",
    Figma: "./html/figmadow.html",
    Pixso: "./html/pixsodow.html",
    Canva: "./html/canva.html",
    Gimp: "./html/gimp.html",
    Clipclamp: "./html/clipclamp.html"
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
