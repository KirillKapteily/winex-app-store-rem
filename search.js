// import { reducedTransp } from "transp.js";
//   if (reducedTransp === true) {
//             searchModal.style.background = "white";
//         } else {
//                    searchModal.style.background = "#d32f2f00";
//         }
//search
let progs = {
    Firefox: "./html/firefoxdownloadpage.html",
    "Google Chrome": "./html/googlechromedownload.html",
    Supermium: "./html/supermiumdownload.html",
    "Microsoft Edge": "./html/msedgedownload.html",
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
    "Epic Games": "./html/epicgamesdow.html",
    "Visual Studio Code": "./html/vscodedownload.html",
    "GitHub Desktop": "./html/githubdownload.html",
    GitBash: "./html/gitbash.html",
    ArduinoIDE: "./html/arduino.html",
    Malwarebytes: "./html/malwarebytesd.html",
    Bitdefender: "./html/bitdefender.html",
    Avast: "./html/avast.html",
    AnyDesk: "./html/anydeskdownload.html",
    "Apple devices": "./html/appledevi.html",
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
    clipchamp: "./html/clipclamp.html",
    capcut: "./html/"
};



let searchBar = document.querySelector(".searchBar");
let nameAr = document.querySelectorAll(".card-title");
const array = Array.from(nameAr);
const names = array.map(element => element.textContent.trim());



let searching = () => {
    let text = searchBar.value.trim().toLowerCase();
    const existingModal = document.querySelector(".searchModal");
    if (existingModal) existingModal.remove();

    if (text === "") return;

    const filtered = Object.keys(progs).filter(name =>
        name.toLowerCase().includes(text)
    );

    if (filtered.length > 0) {
        const div = document.createElement("div");
        div.classList.add("searchModal");
        div.innerHTML = `<h3 class="list-title">Search Results:</h3><ul class="main-list">
            ${filtered.map(name => `
                <li class="main-item-s">
                    <a href="${progs[name]}" class="main-link">
                        <img class="img" src="images/${name.toLowerCase().replace(/\s/g, '')}.svg" alt="${name}" width="98">
                        <h3 class="card-title-s">${name}</h3>
                    </a>
                </li>
            `).join("")}
        </ul>`;


        document.body.appendChild(div);
    }
};
const debounceSearch = _.debounce(searching, 200);
searchBar.addEventListener("input", debounceSearch);
