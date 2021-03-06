// Стартовый файл приложения!
const express = require('express'); //express - веб-фреймворк для приложений Node.js
require('dotenv').config() //dotenv нужен чтобы считать конфигурацию окружения из .env
const sequelize = require('./db/dbConfig'); ////Импоритруем сконфигурированный объект sequelize
const models = require('./models/model'); //Импортируем созданные sequelize модели
const cors = require('cors'); //Импортируем cors чтобы отправлять запросы с бразуезера
const mainRouter = require('./routes/index'); //Импортируем файл с корневыми маршрутами (главный роутер)
const errorHandler = require('./middleware/ErrorHandlingMiddleWare'); //Импортируем файл с middleware-ф-цией для обработки ошибок
const bodyParser = require('body-parser'); //Импортируем body parser для удобного парсинга тела post запроса
const fileUpload = require('express-fileupload'); //Импоритруем express-fileupload для отправки файлов
const path = require('path'); //Модуль path для удобной работы с путями

//TODO в контроеллах во всех респонсах проставить status code

// const PORT = 3030; //Порт для работы нашего приложения !!!Объявлять порт статично - плолхо.
// Вынесем конфигурацию в файл переменные окружения (.env)
const PORT = process.env.PORT || 3030 // Присваеиваем порту значение из переменной оркужения(!!!нужен модуль dotenv!!!)

const app = express() //Creates an Express application

app.use(cors()) //Настройка cors для того чтобы отправлять запросы с бразуезера
// app.use(express.json()) //Чтобы приложение работала с json удобно
app.use(bodyParser.json()) //Чтобы приложение работала с json файлами удобно
app.use(express.static(path.resolve(__dirname, "static"))) //Явно уазываем серверу, что файлы в папке static - статичные
app.use(fileUpload({})); //Для работы с req.files (загрузка файла)
app.use('/api', mainRouter); //Обрабатываем все машруты, начинающиеся с api внутри главного роутера


app.use(errorHandler) //Обработка ошибки, последний middleware(замыкающий) (middleware работющ. с ошибками - всегда в конце!)



//Поключение к бд (асинхронно)
const start = async ()=>{
    try {
        await sequelize.authenticate() // функция для подключения к бд (дожидаемся - await)
        await sequelize.sync() // эта функция будет сверять состояние бд со схемой данный //(TODO которую мы опишем чуть позже)
        //Запускаем приложение (порт, колбэк при запуске)
        app.listen(PORT, ()=>console.log('Сервер запущен на порту: ' + PORT))
    }catch (error){
        console.error('Ошибка подключения к бд' + error)
    }
}

start();



