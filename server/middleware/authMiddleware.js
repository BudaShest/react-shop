//В этом файле мы создаём мидлвейр, где мы будем декодировать токен и проверять его на валидность
const jwt = require('jsonwebtoken');


module.exports = function (req,res,next){
    if(req.method === "OPTIONS"){ //Если метод запроса равен OPTIONS, то пропускаем (нам нужны POST и GET)
        next()
    }

    try{
        //Токены обычно помещают в заголовок реквеста (authorization)
        const token = req.headers.authorization.split(" ")[1] //Этот заголовок имеет вид "ИМЯ_ТОКЕНА ТОКЕНА", поэтому .split(" ")[1]
        if(!token){
            return res.status(401).json({message:"Не авторизован"}) //Если не валидный токен - вовзращаем код и сообщение
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY); //Сравниваем jwt токен
        req.user = decoded;
        next(); //Вызываем следующий мидлвейр
    }catch (e){
        res.status(401).json({message:"Не авторизован"}) //Если не валидный токен - вовзращаем код и сообщение
    }
}