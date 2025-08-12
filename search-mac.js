let progs = {
    Firefox: "./html/firefoxdownloadpagemacos.html",
    "Google Chrome": "./html/googlechromedownloadmacos.html",
    "Microsoft Edge": "./html/msedgedownloadmacos.html",
    Opera: "./html/operadownmacos.html",
    Telegram: "./html/telegramdownloadmacos.html",
    Discord: "./html/discorddownloadmacos.html",
    Viber: "./html/viberdowmacos.html",
    WhatsApp: "./html/whatsappmac.html",
    Teams: "./html/teamsmac.html",
    "Apple Music": "./html/applemusicdowmac.html",
    Spotify: "./html/spotifydownloadlinux.html",
    "Apple TV": "./html/appletvmac.html",
    Dropbox: "./html/dropboxdownloadmacos.html",
    "Google Drive": "./html/googledrivedownloadmacos.html",
    OneDrive: "./html/onedrivedowmac.html",
    Steam: "./html/steamdowmacos.html",
    "Epic Games": "./html/epicgamesdowmacos.html",
    Pages: "./html/onedrivedowmac.html",
    Numbers: "./html/steamdowmacos.html",
    "Visual Studio Code": "./html/vscodedownloadmacos.html",
    Xcode: "./html/xcode.html",
    "GitHub Desktop": "./html/vscodedownloadmacos.html",
    "Arduino IDE": "./html/arduinomac.html",
    Malwarebytes: "./html/malwarebytesdmac.html",
    Bitdefender: "./html/bitdefendermac.html",
    Avast: "./html/avastmac.html",
    AnyDesk: "./html/anydeskdownloadmacos.html",
    Docker: "./html/dockermac.html",
    Evernote: "./html/evernotemac.html",
    Zoom: "./html/zoomdowmac.html",
    VLC: "./html/vlcmac.html",
    OBS: "./html/obsdownmacos.html",
    Figma: "./html/figmadowmac.html",
    Pixso: "./html/pixsodowmac.html",
    Canva: "./html/canvamac.html",
    Gimp: "./html/gimpmac.html",
    Wine: "./html/winemac.html"
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
                <li class="main-item">
                    <a href="${progs[name]}" class="main-link">
                        <img class="img" src="images/${name.toLowerCase().replace(/\s/g, '')}.svg" alt="${name}" width="98">
                        <h3 class="card-title">${name}</h3>
                    </a>
                </li>
            `).join("")}
        </ul>`;

        document.body.appendChild(div);
    }
};

searchBar.addEventListener("input", searching);
