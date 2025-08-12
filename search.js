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
    Threads: "./html/threads.html",
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
    "VS code": "./html/vscodedownload.html",
    "GitHub Desktop": "./html/githubdownload.html",
    GitBash: "./html/gitbash.html",
    "Arduino IDE": "./html/arduino.html",
    Malwarebytes: "./html/malwarebytesd.html",
    Bitdefender: "./html/bitdefender.html",
    Avast: "./html/avast.html",
    AnyDesk: "./html/anydeskdownload.html",
    "Apple devices": "./html/appledevi.html",
    Docker: "./html/docker.html",
    "MS PC Manager": "./html/mspcmgr.html",
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
    let text = searchBar.value.trim().toLowerCase();
    const existingModal = document.querySelector(".searchModal");
    if (existingModal) existingModal.remove();

    if (!text) return;

    // Find all names that include the search text (case-insensitive)
    const matches = names.filter(name => name.toLowerCase().includes(text));

    if (matches.length === 0) return;

    const div = document.createElement("div");
    div.classList.add("searchModal");

    let listHtml = '<ul class="main-list">';
// Map app names to their correct image extension
const imageExtMap = {
    firefox: 'svg',
    googlechrome: 'svg',
    supermium: 'svg',
    microsoftedge: 'svg',
    opera: 'svg',
    telegram: 'svg',
    discord: 'svg',
    viber: 'svg',
    whatsapp: 'svg',
    teams: 'svg',
    instagram: 'svg',
    facebook: 'svg',
    threads: 'svg',
    applemusic: 'svg',
    spotify: 'svg',
    appletv: 'svg',
    netflix: 'svg',
    hulu: 'svg',
    dropbox: 'svg',
    googledrive: 'svg',
    onedrive: 'svg',
    steam: 'svg',
    epicgames: 'svg',
    vscode: 'svg',
    githubdesktop: 'webp',
    gitbash: 'svg',
    arduinoide: 'svg',
    malwarebytes: 'webp',
    bitdefender: 'svg',
    avast: 'svg',
    anydesk: 'svg',
    appledevices: 'webp',
    docker: 'svg',
    mspcmanager: 'webp',
    evernote: 'svg',
    zoom: 'svg',
    vlc: 'svg',
    obs: 'svg',
    bandicam: 'svg',
    figma: 'svg',
    pixso: 'png',
    canva: 'svg',
    gimp: 'svg',
    clipclamp: 'avif',
};    matches.forEach(match => {
        const href = progs[match] || '#';
        const baseName = match.toLowerCase().replace(/\s/g, '');
        const ext = imageExtMap[baseName] || 'svg';
        const imgSrc = `images/${baseName}.${ext}`;
        listHtml += `
            <li class="main-item">
                <a href="${href}" class="main-link">
                    <img class="img" src="${imgSrc}" alt="${match}" width="119">
                    <h3 class="card-title">${match}</h3>
                </a>
            </li>
        `;
    });
    listHtml += '</ul>';

    div.innerHTML = listHtml;


    document.body.appendChild(div);
}

searchBar.addEventListener("input", searching);
