//Файл с классом - контролером для модели user
//Можно использовать ф-цию - контроллер, но класс помогает удобно группировать
const bcrypt = require('bcrypt'); //bcrypt нужен для хэширования паролей
const jwt = require('jsonwebtoken');//jsonwebtoken - нужен для генерации и работы с jwt токеном
const ApiError = require('../error/ApiError'); //Импортируем файл с классом - обработчикм ошибок
const {User, Basket} = require('../models/model'); //Импоритруем модели классов User и Basket

//Ф-ия для генерации jwt-токена
const generateJWT = (id, email, role)=>{
    //Теперь генерируем jwt. jwt.sign(payload, secret_word, options)
    return jwt.sign(
        {id:id, email:email, role:role}, //Основная информация в токене
        process.env.SECRET_KEY, //Секретное слово вынесено в переменные окружения
        {expiresIn: '24h'} //Срок жизни токена - 24 часа
    )
}

class UserController{
    //Регистрация
    async registration(req, res, next){
        const {email, password, role} = req.body; //Получаем из тела post-запроса поля
        if(!email && !password){ //Проверяем не пустые или пароль и email
            return next(ApiError.badRequest('Неверный email или пароль')) //Если пустые, то возвращаем оишбку
        }
        //Теперь необходимо проверить нет ли уже пользователя с таким email
        const candidate =await User.findOne({where:{email:email}})

        if (candidate){ // Если есть пользователь с таким email
            return next(ApiError.badRequest('Такой пользователь уже существует')) //Возвращаем оишбку что такой пользователь уже существуе
        }

        //Если всё в порядке - хэшируем пароль (синхронно)
        const hashPassword = bcrypt.hashSync(password, 5);
        //И создаём пользователя
        const user = await User.create({
            email:email,
            password:hashPassword,
            role:role
        })
        //Сразу создадим коризну для пользователя
        const basket = await Basket.create({
            userId: user.id
        })
        //Теперь генерируем jwt - наша ф-ция generateJWT
        const token = generateJWT(user.id, user.email, user.role);

        return res.json({token}); //Когда токен сгенерирован - вовращаем его на клиент.
    }

    //Логин
    async login(req,res, next){
        const {email, password} = req.body; //Получаем email и пароль из тела post запроса
        const user = await User.findOne({where:{email:email}}); //Ищем пользователя с таким email
        if(!user){ //Если нет такого - ошибка
            return next(ApiError.badRequest('Пользователь с таким именем не найаден'));
        }
        let comparePassword = bcrypt.compareSync(password, user.password); //Сравниваем ввёдённый пароль с хэшированным
        if(!comparePassword){ //Если не подходит - ошибка
            return next(ApiError.internal('Указан неверный пароль'))
        }
        //Генерим токен и возвращаем на клиент.
        const token = generateJWT(user.id, user.email, user.role);
        return res.json(token);
    }

    //Функция для проверки авторизации
    async check(req,res,next){
        const token = generateJWT(req.user.id, req.user.email, req.user.role); //генерим новый jwt токен
        return res.json({token}); //и возвращаем на клиент
    }
}

//Эскпортируем сразу готовый объект данного класса
module.exports = new UserController()