const express = require('express');
const path = require('path');

const app = express();

// --- Путь к папке Frontend ---
const frontendPath = path.join(__dirname, 'Frontend');

// --- Обслуживание статических файлов ---
app.use(express.static(frontendPath));

// --- Главный маршрут ---
// Отправляем index.html на любой запрос, который не является запросом к файлу
app.get('*', (req, res) => {
    res.sendFile(path.join(frontendPath, 'index.html'), (err) => {
        if (err) {
            console.error('ОШИБКА: Не удалось отправить index.html:', err);
            res.status(500).send('Ошибка на сервере.');
        }
    });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Простой сервер успешно запущен на порту ${PORT}.`);
});
