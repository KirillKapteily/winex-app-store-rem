import { pipeline } from "https://cdn.jsdelivr.net/npm/@xenova/transformers";

let model;
const chatDiv = document.getElementById("chat");
const inputElement = document.getElementById("input");
const sendButton = document.getElementById("sendButton");

async function loadModel() {
    console.log("Загрузка модели...");
    try {
        model = await pipeline('text-classification', 'Xenova/distilbert-base-uncased');

        console.log("Модель загружена!");
    } catch (error) {
        console.error("Ошибка загрузки модели:", error);
        chatDiv.innerHTML += `<div class="bot">Ошибка загрузки модели. Проверьте консоль.</div>`;
    }
}

async function sendMessage() {
    const input = inputElement.value.trim();
    if (!input) return;

    chatDiv.innerHTML += `<div class="user">${input}</div>`;
    inputElement.value = "";

    if (!model) {
        chatDiv.innerHTML += `<div class="bot">Модель еще не загружена. Подождите...</div>`;
        return;
    }

    try {
        const response = await model(input, { max_new_tokens: 20 });
        chatDiv.innerHTML += `<div class="bot">${response.generated_text}</div>`;
    } catch (error) {
        console.error("Ошибка при генерации ответа:", error);
        chatDiv.innerHTML += `<div class="bot">Произошла ошибка при обработке запроса.</div>`;
    }
}

sendButton.addEventListener("click", sendMessage);
inputElement.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        sendMessage();
    }
});

loadModel();
