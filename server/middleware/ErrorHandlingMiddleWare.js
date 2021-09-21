//Файл для определения промежуточной ф-ции для обработки ошибок
const ApiError = require('../error/ApiError'); //Импортируем наш класс-обработчик ошибок

//Ф-ция middleware (экспорт)
module.exports = function (err, req, res, next){
    //Проверяем есть ли ошибка (является ли err объектом ApiError)
    if(err instanceof ApiError){
        return res.status(err.status).json({message:err.message}) //Если да то возвращаем респонс с кодом ошибки из err и сообщение из err
    }
    //Если ошибка не является объектом класса ApiError
    return res.status(500).json({message:'Непредвиденная ошибка'})
}