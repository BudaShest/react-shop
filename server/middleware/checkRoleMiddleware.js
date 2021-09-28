const jwt = require('jsonwebtoken'); //Подключаем jwt для работы с jsonwebtoken

module.exports = function (role){ //Используем замыкание, куда мы будем передавать роль, а возвращать уже middleware
    return function (req,res,next){
        if(req.method === "OPTIONS"){
            next();
        }
        try{
            const token = req.headers.authorization.split(' ')[1];
            if(!token){
                return res.status(404).json({message:"Не автоирзован"});
            }
            const decoded = jwt.verify(token, process.env.SECRET_KEY);
            if(decoded.role !== role){
                return res.status(403).json({message:"Нет доступа"})
            }
            req.user = decoded;
            next();

        }catch (e){
            res.status(403).json({message:"Нет доступа"})
        }
    }

}