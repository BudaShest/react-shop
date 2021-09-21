//Файл с основным роутером нашего приложения
const Router = require('express'); //Подключаем express для создания роутера
const router = new Router(); //Создаём объект роутера

//Импорт всех роутов с подмаршрутами для сопоставления с машрутами
const userRouter = require('./userRouter');
const typeRouter = require('./typeRouter');
const brandRouter = require('./brandRouter')
const deviceRouter = require('./deviceRouter');

//Создаём ф-ции промежуточной обработки для работы с роутером куда передаём маршрут и роутер с подмаршуртами, отвечающий за этот маршурт
router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/device', deviceRouter)


module.exports = router;