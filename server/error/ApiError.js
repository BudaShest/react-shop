//Файл с классом-универасльным обработчиком ошибок
class ApiError extends Error{ //Наш класс наследуется от встроенного класса Error
    constructor(status, message) { //Параметры конструктора - (статус_код, сообщение, которые мы будем возвращать на клиент)
        super(); //Вывзываем родительский конструктор
        this.status = status; //Присваем свойства класса значения из конструктора
        this.message = message; //Присваем свойства класса значения из конструктора
    }

    //Стат. ф-ция - плохой запрос
    static badRequest(message){
        return new ApiError(404, message) //Возвращаем объект текущ. класса с подходящим статус-кодом и сообщением
    }

    //Стат. ф-ция - внутренная ошибка сервера
    static internal(message){
        return new ApiError(500, message) //Возвращаем объект текущ. класса с подходящим статус-кодом и сообщением
    }

    //Стат. ф-ция - отсутсвуют права
    static forbidden(message){
        return new ApiError(403, message) //Возвращаем объект текущ. класса с подходящим статус-кодом и сообщением
    }

}

module.exports = ApiError; //Экспортируем данный класс