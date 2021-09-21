//Файл с подмаршрутами для маршрута /type
const Router = require('express'); //Подключаем express для создания роутера
const router = new Router(); //Создаём объект роутера
const typeController = require('../controllers/typeController'); //Импортируем объект-контроллер для модели type

//Сопоставляем подмаршруты с методами объекта контоллера router.имя_метода('/путь',ф-ция_контроллер)
router.post('/',typeController.create) //машрут для обращение к /type через метод post (добавление)
router.get('/',typeController.getAll) //машрут для обращение к /type через метод get (получение всех)

module.exports = router; //Экспоритруем текущий роутер