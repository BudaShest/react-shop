//Файл конфигурации к базе данных

//sequelize -  это ORM (Object-Relational Mapping — объектно-реляционное отображение или преобразование)
// для работы с такими СУБД  как Postgres, MySQL, MariaDB, SQLite и MSSQL
// ORM хороши тем, что позволяют взаимодействовать с БД на языке приложения (JavaScript),
// т.е. без использования специально предназначенных для этого языков (SQL).
const {Sequelize} = require('sequelize') //делаем деструктуризацию т.к модуль большой

//Т.к в файле окружения(.env) находятся переменные окржуения (включаяя конфигурацию бд),
//Мы получаем значение параметров конструктора sequelize из файла с окружением
module.exports = new Sequelize(
    process.env.DB_NAME, //имя базы данных (database)
    process.env.DB_USER, //имя пользователя б.д. (username)
    process.env.DB_PASSWORD, //пароль пользователя б.д - (password)
    {
        host:process.env.DB_HOST, //имя хоста б.д. (host)
        dialect: 'postgres', //диалект б.д. (dialect)
        port: process.env.DB_PORT //порт хоста б.д. (port)
    }
)