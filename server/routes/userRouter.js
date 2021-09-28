//Файл с подмаршрутами для машрута /user
const Router = require('express'); //Подключаем express для создания роутера
const router = new Router(); //Создаём объект роутера
const userController = require('../controllers/userController'); //Импортируем объект-контроллер для модели user
const authMiddleware = require('../middleware/authMiddleware'); //Ипортируем мидлвейр для проверки на то, авторизован ли пользователь

//Сопоставляем подмаршруты с методами объекта контоллера router.имя_метода('/путь',ф-ция_контроллер)
router.post('/registration',userController.registration) //маршрут для обращение к /user/registration через метод post (регистрация)
router.post('/login',userController.login) //маршрут для обращение к /user/login через метод post (логин)
router.get('/auth',authMiddleware,userController.check) //маршрут для обращение к /user/auth через метод get (авторизация) (также доавбляем туда middleware для проверки на автоирзацию)

module.exports = router; //Экспоритруем текущий роутер