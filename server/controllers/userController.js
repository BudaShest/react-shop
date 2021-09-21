//Файл с классом - контролером для модели user
//Можно использовать ф-цию - контроллер, но класс помогает удобно группировать

const ApiError = require('../error/ApiError');

class UserController{
    //Регистрация
    async registration(req, res){

    }

    //Логин
    async login(req,res){

    }

    //Функция для проверки авторизации
    async check(req,res,next){
        const {id} = req.query //Получаем id девайса через деструктуриазцию парамета запроса query
        if(!id){
            return next(ApiError.badRequest('Не задан ID')) //Если id - undefined, то передаём в следующую функцию стат. метод для данной ошибки с собщением в параметрах
        }
        res.json(id); //Если удачно - возвращаем id
    }
}

//Эскпортируем сразу готовый объект данного класса
module.exports = new UserController()