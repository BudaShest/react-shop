//Файл с подмаршрутами для маршрута /device
const Router = require('express'); //Подключаем express для создания роутера
const router = new Router(); //Создаём объект роутера
const deviceController = require('../controllers/deviceController'); //Импортируем объект-контроллер для модели device
const checkRole = require('../middleware/checkRoleMiddleware'); //Импоритурем ф-цию, возвращающую мидлвейр для проверки роли

//Сопоставляем подмаршруты с методами объекта контоллера router.имя_метода('/путь',ф-ция_контроллер)
router.post('/',checkRole("ADMIN"),deviceController.create) //маршрут для обращение к /device через метод post (добавление) (также вызываем ф-цию checkRole с параметром role = 'ADMIN', возвращающую мидлвэйр)
router.get('/',deviceController.getAll) //маршрут для обращение к /device через метод get (получение всех)
router.get('/:id',deviceController.getOne) //маршрут для образения к /device через метод get (получение одного девайса)

module.exports = router; //Экспоритруем текущий роутер