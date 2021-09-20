//Файл конфигурации к базе данных

//sequelize -  это ORM (Object-Relational Mapping — объектно-реляционное отображение или преобразование)
// для работы с такими СУБД  как Postgres, MySQL, MariaDB, SQLite и MSSQL
// ORM хороши тем, что позволяют взаимодействовать с БД на языке приложения (JavaScript),
// т.е. без использования специально предназначенных для этого языков (SQL).
const {Sequelize} = require('sequelize') //делаем деструктуризацию т.к модуль большой

module.exports = new Sequelize(

)