// const modal = document.getElementById("chat-modal");

// function openChat() {
//     modal.style.display = "flex";
// }

// function closeChat() {
//     modal.style.display = "none";
// }

// class ChatBot {
//     constructor() {
//         this.responses = {
//             "hello": "hello, what can I help with?",
//             "hi": "hi, what can I help with?",
//             "hey": "hi, how can I help?",
//             "how are you": "i'm a bot, so i'm always fine",
//             "what do you do": "i'm a chatbot, here to help you with any questions you have",
//             "what is your purpose": "to assist you with any questions or tasks you have",
//             "who created you": "i was created by a Kirill to help with answering questions",
//             "who is your creator": "my creator is Kirill",
//             "what is your name": "i'm a Winex Assistant",
//             "what can you do": "i can help answer questions, provide information, and assist with tasks",
//             "help": "how can I help you?",
//             "bye": "bye, thanks for testing",
//             "goodbye": "goodbye, thanks for testing",
//             "thanks": "you're welcome",
//             "firefox": "Firefox is a web browser used for browsing the internet securely and efficiently.",
//             "github desktop": "GitHub Desktop is a tool for managing Git repositories with a user-friendly interface.",
//             "telegram": "Telegram is a messaging app offering fast, secure, and cloud-based communication.",
//             "anydesk": "AnyDesk is a remote desktop software that allows you to control devices from a distance.",
//             "google_chrome": "Google Chrome is a popular web browser known for its speed and integration with Google services.",
//             "supermium": "Supermium is an application for premium content or features (specific details depend on context).",
//             "vs code": "Visual Studio Code (VS Code) is a powerful code editor for various programming languages.",
//             "dropbox": "Dropbox is a cloud storage service used for saving and sharing files online.",
//             "spotify": "Spotify is a music streaming platform providing access to millions of songs and podcasts.",
//             "microsoft edge": "Microsoft Edge is a web browser with modern features and deep integration with Windows.",
//             "google drive": "Google Drive is a cloud-based file storage and collaboration service by Google.",
//             "discord": "Discord is a platform for voice, video, and text communication, popular among gamers and communities.",
//             "malwarebytes": "Malwarebytes is an antivirus and anti-malware software to protect devices from threats.",
//             "obs": "OBS (Open Broadcaster Software) is used for video recording and live streaming.",
//             "skype": "Skype is a communication platform for video calls, voice calls, and messaging.",
//             "opera": "Opera is a web browser with unique features like a built-in VPN and ad blocker.",
//             "steam": "Steam is a digital distribution platform for video games and a hub for gaming communities.",
//             "gitbash": "GitBash is a command-line tool for using Git with a bash shell interface on Windows.",
//             "epic games": "The Epic Games Launcher is a digital distribution platform developed and operated by Epic Games",
//             "onedrive": "OneDrive is a cloud storage service by Microsoft for storing, syncing, and sharing files.",
//             "viber": "Viber is a messaging and voice call app that allows free communication worldwide.",
//             "figma": "Figma is a collaborative design tool for creating user interfaces, prototypes, and more.",
//             "apple music": "Apple Music is a music streaming service offering a large library of songs and curated playlists.",
//             "zoom": "zoom is Zoom is a popular video conferencing software that allows individuals and organizations to host virtual meetings."

//         };
//         this.defaultResponse = "Sorry, I can't answer for that.";
//     }

//     getResponse(message) {
//         message = message.toLowerCase();
//         for (let key in this.responses) {
//             const regex = new RegExp(`\\b${key}\\b`, 'i');
//             if (regex.test(message)) {
//                 return this.responses[key];
//             }
//         }
//         return this.defaultResponse;
//     }
// }

// const bot = new ChatBot();

// function sendMessage() {
//     const inputField = document.getElementById("user-input");
//     const messagesContainer = document.getElementById("chat-messages");

//     const userMessage = inputField.value.trim();
//     if (!userMessage) return;

//     const userDiv = document.createElement("div");
//     userDiv.className = "message user";
//     userDiv.textContent = userMessage;
//     messagesContainer.appendChild(userDiv);

//     const botResponse = bot.getResponse(userMessage);
//     const botDiv = document.createElement("div");
//     botDiv.className = "message bot";
//     botDiv.textContent = botResponse;
//     messagesContainer.appendChild(botDiv);

//     messagesContainer.scrollTop = messagesContainer.scrollHeight;
//     inputField.value = "";
// }

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
        const response = await fetch('https://api-inference.huggingface.co/models/gpt2', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${this.apiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                inputs: text
            })
        });

        const data = await response.json();
        return data[0] ? data[0].generated_text : this.defaultResponse;
    }

    // Метод для обработки сообщения
    async getResponse(message) {
        const lowerCaseMessage = message.toLowerCase();
        // Если сообщение соответствует известным фразам, возвращаем локальный ответ
        for (let key in this.responses) {
            const regex = new RegExp(`\\b${key}\\b`, 'i');
            if (regex.test(lowerCaseMessage)) {
                return this.responses[key];
            }
        }

        // Если нет подходящего локального ответа, обращаемся к API Hugging Face
        return await this.getResponseFromHuggingFace(message);
    }

    // Локальные ответы для различных команд
    responses = {
        "hello": "hello, what can I help with?",
        "hi": "hi, what can I help with?",
        "hey": "hi, how can I help?",
        "how are you": "i'm a bot, so i'm always fine",
        "what do you do": "i'm a chatbot, here to help you with any questions you have",
        "what is your purpose": "to assist you with any questions or tasks you have",
        "who created you": "i was created by a Kirill to help with answering questions",
        "who is your creator": "my creator is Kirill",
        "what is your name": "i'm a Winex Assistant",
        "what can you do": "i can help answer questions, provide information, and assist with tasks",
        "help": "how can I help you?",
        "bye": "bye, thanks for testing",
        "goodbye": "goodbye, thanks for testing",
        "thanks": "you're welcome",
        "firefox": "Firefox is a web browser used for browsing the internet securely and efficiently.",
        "github desktop": "GitHub Desktop is a tool for managing Git repositories with a user-friendly interface.",
        "telegram": "Telegram is a messaging app offering fast, secure, and cloud-based communication.",
        "anydesk": "AnyDesk is a remote desktop software that allows you to control devices from a distance.",
        "google_chrome": "Google Chrome is a popular web browser known for its speed and integration with Google services.",
        "supermium": "Supermium is an application for premium content or features (specific details depend on context).",
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
        "apple music": "Apple Music is a music streaming service offering a large library of songs and curated playlists.",
        "zoom": "zoom is Zoom is a popular video conferencing software that allows individuals and organizations to host virtual meetings."
    };
}

// Убедитесь, что ваш ключ API Hugging Face заменен
const apiKey = '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';
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

        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        inputField.value = "";
    });
}



// Пример вызова функции
document.getElementById("send-button").addEventListener("click", sendMessage);


