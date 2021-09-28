//Файл с классом - контролером для модели brand
//Можно использовать ф-цию - контроллер, но класс помогает удобно группировать

const ApiError = require('../error/ApiError'); //Импортируем файл с классом - обработчикм ошибок

const {Brand} = require('../models/model'); //Импортируем модуль бренда

class BrandController{
    //Создать бренд
    async create(req, res){
        const {name} = req.body //Извлекаем из тела пост запроса название (для типа)
        //TODO проверка на то, что name не пустой

        //Ф-ция для создания записи в бд через ORM(sequelize) Модель.create(объект с полями)
        const brand = await Brand.create({name}) //В параметры ф-ция передаём объект с полями

        return res.status(201).json(brand) //Возвращаем статус что объект создан успешно и сам объект
    }

    //Получить все бренды
    async getAll(req,res){
        const brands = await Brand.findAll();
        return res.json(brands);
    }


}

//Эскпортируем сразу готовый объект данного класса
module.exports = new BrandController()