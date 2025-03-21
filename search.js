const searchInput = document.getElementById('searchInput');
const itemList = document.getElementById('itemList');

// Показать список при фокусе
searchInput.addEventListener('focus', function () {
    itemList.style.display = 'block';
});

// Фильтрация списка при вводе
searchInput.addEventListener('input', function () {
    let filter = this.value.toLowerCase();
    let items = document.querySelectorAll('#itemList li');

    items.forEach(function (item) {
        let text = item.textContent.toLowerCase();
        item.style.display = text.includes(filter) ? '' : 'none';
    });
});

// Скрыть список, если поле пустое и потеряло фокус
searchInput.addEventListener('blur', function () {
    setTimeout(() => {
        if (!this.value.trim()) {
            itemList.style.display = 'none';
        }
    }, 200); // Небольшая задержка, чтобы дать возможность выбрать элемент
});

// Выбор элемента из списка
document.querySelectorAll('#itemList li').forEach(item => {
    item.addEventListener('click', function () {
        searchInput.value = this.textContent;
        itemList.style.display = 'none';
    });
});