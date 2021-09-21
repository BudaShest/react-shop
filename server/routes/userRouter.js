//Файл с подмаршрутами для машрута /user
const Router = require('express'); //Подключаем express для создания роутера
const router = new Router(); //Создаём объект роутера
const userController = require('../controllers/userController'); //Импортируем объект-контроллер для модели user

//Сопоставляем подмаршруты с методами объекта контоллера router.имя_метода('/путь',ф-ция_контроллер)
router.post('/registration',userController.registration) //маршрут для обращение к /user/registration через метод post (регистрация)
router.post('/login',userController.login) //маршрут для обращение к /user/login через метод post (логин)
router.get('/auth',userController.check) //мрашрут для обращение к /user/auth через метод get (авторизация TODO JWT-токен)

module.exports = router; //Экспоритруем текущий роутер