const modal = document.getElementById("chat-modal");

function openChat() {
    modal.style.display = "flex";
}

function closeChat() {
    modal.style.display = "none";
}

class ChatBot {
    constructor(apiKey) {
        this.apiKey = apiKey; // API ключ для Hugging Face
        this.defaultResponse = "Sorry, I can't answer for that.";
    }


    
    // Функция для получения ответа от модели Hugging Face
   async getResponseFromHuggingFace(text) {
    try {
        const response = await fetch('https://api-inference.huggingface.co/models/mistralai/Mixtral-8x7B-Instruct', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${this.apiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ inputs: text })
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.statusText}`);
        }

        const data = await response.json();
        return data.generated_text || this.defaultResponse;
    } catch (error) {
        console.error("Hugging Face API error:", error);
        return this.defaultResponse;
    }
}



    // Метод для обработки сообщения
    async getResponse(message) {
        const lowerCaseMessage = message.toLowerCase();
        let collectedResponses = [];

        // Проверяем ключевые слова и добавляем ответы в массив
        for (let key in this.responses) {
            const regex = new RegExp(`\\b${key}\\b`, 'i');
            if (regex.test(lowerCaseMessage)) {
                collectedResponses.push(this.responses[key]);
            }
        }

        // Если есть локальные ответы, объединяем их
        if (collectedResponses.length > 0) {
            return collectedResponses.join(' ');
        }

        // Если нет подходящего локального ответа, обращаемся к API Hugging Face
        return await this.getResponseFromHuggingFace(message);
    }

    // Локальные ответы для различных команд
    responses = {
        "hello": "hello",
        "hi": "hi",
        "hey": "hi ",
        "how are you": "i'm a Winex AI, so i'm always fine",
        "what do you do": "i'm a Winex AI, here to help you with any questions you have",
        "what do u do": "i'm a Winex AI, here to help you with any questions you have",
        "what is your purpose": "to assist you with any questions or tasks you have",
        "who created you": "i was created by a Kirill to help with answering questions",
        "who is your creator": "my creator is Kirill",
        "what is your name": "i'm a Winex Assistant",
        "what can you do": "i can help answer questions, provide information, and assist with tasks",
        "help": "how can I help you?",
        "bye": "bye, thanks for testing",
        "bye bye": "bye, thanks for testing",
        "goodbye": "goodbye, thanks for testing",
        "thanks": "you're welcome",
        "thank you": "you're welcome",
        "lol": "ha",
        "haha": "ha",
        "ok": "ok, let me know if you need help with anything else",
        "firefox": "Firefox is a web browser used for browsing the internet securely and efficiently.",
        "github desktop": "GitHub Desktop is a tool for managing Git repositories with a user-friendly interface.",
        "telegram": "Telegram is a messaging app offering fast, secure, and cloud-based communication.",
        "anydesk": "AnyDesk is a remote desktop software that allows you to control devices from a distance.",
        "google chrome": "Google Chrome is a popular web browser known for its speed and integration with Google services.",
        "supermium": "Supermium is an Up to date browser for outdated version of windows.",
        "vs code": "Visual Studio Code (VS Code) is a powerful code editor for various programming languages.",
        "dropbox": "Dropbox is a cloud storage service used for saving and sharing files online.",
        "spotify": "Spotify is a music streaming platform providing access to millions of songs and podcasts.",
        "microsoft edge": "Microsoft Edge is a web browser with modern features and deep integration with Windows.",
        "google drive": "Google Drive is a cloud-based file storage and collaboration service by Google.",
        "discord": "Discord is a platform for voice, video, and text communication, popular among gamers and communities.",
        "malwarebytes": "Malwarebytes is an antivirus and anti-malware software to protect devices from threats.",
        "obs": "OBS (Open Broadcaster Software) is used for video recording and live streaming.",
        "skype": "Skype is a communication platform for video calls, voice calls, and messaging.",
        "opera": "Opera is a web browser with unique features like a built-in VPN and ad blocker.",
        "steam": "Steam is a digital distribution platform for video games and a hub for gaming communities.",
        "gitbash": "GitBash is a command-line tool for using Git with a bash shell interface on Windows.",
        "epic games": "The Epic Games Launcher is a digital distribution platform developed and operated by Epic Games",
        "onedrive": "OneDrive is a cloud storage service by Microsoft for storing, syncing, and sharing files.",
        "viber": "Viber is a messaging and voice call app that allows free communication worldwide.",
        "figma": "Figma is a collaborative design tool for creating user interfaces, prototypes, and more.",
        "pixso": "Pxso is a collaborative design tool for creating user interfaces, prototypes, with free dev mode. Like figma.",
        "apple music": "Apple Music is a music streaming service offering a large library of songs and curated playlists.",
        "zoom": "Zoom is a popular video conferencing software that allows individuals and organizations to host virtual meetings.",
        "bitdefender": "BitDefender is an antivirus software that protects your devices from malware, ransomware, and other threats.",
        "bandicam": "Bandicam is a screen recording software that allows you to capture your screen activity with high quality.",
        "whatsapp": "WhatsApp is a messaging app that allows you to send messages, make voice and video calls, and share media.",
        "gimp": "GIMP is a free and open-source image editor used for retouching photos and creating graphics.",
        "canva": "Canva is a graphic design platform that allows you to create social media graphics, presentations, and more.",
        "apple tv": "Apple TV+ is a subscription-based streaming service offering original TV shows, movies, and documentaries.",
        "docker": "Docker is a platform for developing, shipping, and running applications in containers.",
        "netflix": "Netflix is a popular streaming service offering a wide variety of TV shows, movies, and documentaries.",
        "apple devices": "Apple Devices are a program for managing and organizing your Apple devices.",
        "arduino": "Arduino is an open-source electronics platform based on easy-to-use hardware and software.",
        "instagram": "Instagram is a social media platform for sharing photos, videos, and stories with friends and followers.",
        "facebook": "Facebook is a social media platform for sharing photos, videos, and stories with friends and followers.",
        "threads": "Threads is a messaging app that allows you to communicate with close friends in a private space.",
        "microsoft pc manager": "Microsoft PC Manager is a software that helps you manage your PC.",
        "ms pc manager": "Microsoft PC Manager is a software that helps you manage your PC.",
        "evernote": "Evernote is a note-taking app that allows you to capture ideas, organize notes, and collaborate with others.",
        "wine": "wine is a compatibility layer capable of running Windows applications on several POSIX-compliant operating systems",
        "avast": "Avast is a free antivirus, that protects you from virises for free",
        "Xcode": "Xcode offers all the tools you need to craft great apps for iPhone, iPad, Apple TV, Apple Watch, Apple Vision Pro, and Mac.",
        "pages": "Pages is a powerful word processor that lets you create stunning documents.",
        "teams": "teams a workspace for real-time collaboration and communication, meetings, file and app sharing, and even the occasional emoji",
        "vlc": "VLC is a free and open source cross-platform multimedia player and framework",
    };
}

// Убедитесь, что ваш ключ API Hugging Face заменен
const apiKey = '-';
const bot = new ChatBot(apiKey);

// Функция для отправки сообщений
function sendMessage() {
    const inputField = document.getElementById("user-input");
    const messagesContainer = document.getElementById("chat-messages");

    const userMessage = inputField.value.trim();
    if (!userMessage) return;

    // Добавление индикатора загрузки
    const loadingDiv = document.createElement("div");
    loadingDiv.className = "message bot loading";
    loadingDiv.textContent = "Typing...";
    messagesContainer.appendChild(loadingDiv);

    // Показываем сообщение пользователя
    const userDiv = document.createElement("div");
    userDiv.className = "message user";
    userDiv.textContent = userMessage;
    messagesContainer.appendChild(userDiv);

    // Получаем ответ от бота
    bot.getResponse(userMessage).then(botResponse => {
        const botDiv = document.createElement("div");
        botDiv.className = "message bot";
        botDiv.textContent = botResponse;
        messagesContainer.appendChild(botDiv);

        // Удаляем индикатор загрузки
        messagesContainer.removeChild(loadingDiv);

        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        inputField.value = "";
    });
}

// Пример вызова функции
document.getElementById("send-button").addEventListener("click", sendMessage);
