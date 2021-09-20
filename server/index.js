// Стартовый файл приложения!

const express = require('express'); //express - веб-фреймворк для приложений Node.js
require('dotenv').config() //dotenv нужен чтобы считать конфигурацию окружения из .env

// const PORT = 3030; //Порт для работы нашего приложения !!!Объявлять порт статично - плолхо.
// Вынесем конфигурацию в файл переменные окружения (.env)
const PORT = process.env.PORT || 3030 // Присваеиваем порту значение из переменной оркужения(!!!нужен модуль dotenv!!!)

const app = express() //Creates an Express application

//TODO создать новый .env но ноуте





//Запускаем приложение (порт, колбэк при запуске)
app.listen(PORT, ()=>console.log('Сервер запущен на порту: ' + PORT))

