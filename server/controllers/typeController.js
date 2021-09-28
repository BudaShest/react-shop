//Файл с классом - контролером для модели type
//Можно использовать ф-цию - контроллер, но класс помогает удобно группировать

const ApiError = require('../error/ApiError'); //Импортируем файл с классом - обработчикм ошибок

const {Type} = require('../models/model'); //Импортируем модуль типа

class TypeController{
    //Создать тип
    async create(req, res){
        const {name} = req.body //Извлекаем из тела пост запроса название (для типа)
        //TODO проверка на то, что name не пустой

        //Ф-ция для создания записи в бд через ORM(sequelize) Модель.create(объект_с_полями)
        const type = await Type.create({name}) //В параметры ф-ция передаём объект с полями

        return res.status(201).json(type) //Возвращаем статус что объект создан успешно и сам объект

    }

    //Получить все типы
    async getAll(req,res){
        //Ф-ция для получения всех записей данной модели - findAll
        const types = await Type.findAll()
        return res.json(types)
    }


}

//Эскпортируем сразу готовый объект данного класса
module.exports = new TypeController()