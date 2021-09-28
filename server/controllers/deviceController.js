//Файл с классом - контролером для модели device
//Можно использовать ф-цию - контроллер, но класс помогает удобно группировать

const uuid = require('uuid'); //Пакет для генерации случайного адишника
const path = require('path'); //Модуль path для удобной работы с путями

const ApiError = require('../error/ApiError'); //Импортируем файл с классом - обработчикм ошибок

const {Device, DeviceInfo} = require('../models/model'); //Импортируем модуль девайса и информации о девайсе



class DeviceController{
    //Создать девайс
    async create(req, res, next){
        try{
            let {name, price, brandId,typeId,info} = req.body; //Получаем поля модели device из req.body(т.к post-запрос)
            const {img} = req.files; //Получаем картинку из массива req.files (!!чтобы работало пакет express-fileupload)
            let fileName = uuid.v4() + ".jpg" //Генерируем случайное имя с помощью uuid.v4()
            img.mv(path.resolve(__dirname, "..",'static', fileName)) //img.mv - осуществит перенос файлов из temp в папку для загрузки


            //Ф-ция для создания записи в бд через ORM(sequelize) Модель.create(объект_с_полями)
            const device = await Device.create({name:name,price:price,brandId:brandId,typeId:typeId,img:fileName}) //Создаём запись модели Device

            if (info){ //Если инфа о девайсае не пустая
                info = JSON.parse(info) //Парсим json в js так как данные прийдут в виде массива JSON
                info.forEach(item=>{
                    //Для каждого элемента создаём запис модели device_info (await не ставим, т.к нам не важно дожидаться здесь)
                    DeviceInfo.create({
                        title: item.title,
                        description: item.description,
                        deviceId:device.id
                    })
                })
            }

            return res.json(device);
        }catch (e){ //Если случилась ошибка то передаём в следующую функцию стат. метод для данной ошибки с собщением в параметрах
            next(ApiError.badRequest(e.message))
        }

    }

    //Получить все девайсы
    async getAll(req,res){
        let {brandId, typeId, limit, page} = req.query //Получаем из строки запроса айди бренда и айди типа
        // (также получаем из неё limit - лимит записей на странице и page - текущая страница)
        page = page || 1; //Если страница не задана - будет первая
        limit = limit || 9; //Если лимит не задан - будет девять
        let offset = page * limit - limit; //Находим отступ от текущей страницы


        let devices;
        //Для того, чтобы исопьзовать пагинацию на страницах, используем ф-цию findAndCountAll
        //Она вернёт объект { count, rows }, где count - кол-во записей, rows - сами записи
        if(!brandId && !typeId){ //Если не указаны brandId и typeId
            //Тогда возвращаем все девайсы
            devices =await Device.findAndCountAll({limit:limit, offset:offset})

        }
        if(brandId && !typeId){//Если не указан typeId, но указан brandId
            //Тогда возвращаем девайсы с таким брендом
            //Если нам нужно использовать where в запросе - указываем его в параметре options.where ф-ции findAll
            devices =await Device.findAndCountAll({where:{brandId:brandId}, limit:limit, offset:offset})
        }
        if(!brandId && typeId){//Если не указан brandId, но указан typeId
            //Тогда возвращаем девайсы с таким типом
            devices =await Device.findAndCountAll({where: {typeId:typeId}, limit:limit,offset:offset})
        }
        if(brandId && typeId){//Если указаны и brandId и typeId
            //Тогда возвращаем девайсы с таким типом и брендом
            //Если нам нужно использовать несколько полей в where в запросе - указываем их через запятую в параметре options.where ф-ции findAll
            devices =await Device.findAndCountAll({where: {typeId:typeId, brandId:brandId},limit:limit, offset:offset})
        }

        return res.json(devices)
    }

    //Получить конкретный девайс
    async getOne(req, res){
        const {id} = req.params; //Это айди указан в параметрах роута deviceRouter (:id)
        const device =await Device.findOne(
            {
                where:{id:id}, //Условие запросса
                include: [{model:DeviceInfo, as:"info"}] //Т.к нам нужен массив характеристик, в поле include указываем модель и название поле
            }
        )
        return res.json(device);
    }

}

//Эскпортируем сразу готовый объект данного класса
module.exports = new DeviceController()