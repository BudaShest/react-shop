//Файл с подмаршрутами для машрута /brand
const Router = require('express'); //Подключаем express для создания роутера
const router = new Router(); //Создаём объект роутера
const brandController = require('../controllers/brandController'); //Импортируем объект-контроллер для модели brand

//Сопоставляем подмаршруты с методами объекта контоллера router.имя_метода('/путь',ф-ция_контроллер)
router.post('/', brandController.create) //маршрут для обращение к /brand через метод post (добавление)
router.get('/',brandController.getAll) //маршрут для обращение к /brand через метод get (получение всех)

module.exports = router; //Экспоритруем текущий роутер