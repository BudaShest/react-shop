//В этом файле находится описание моделей данных
const sequelize = require('../db/dbConfig'); //Импоритруем сконфигурированный объект sequelize
const {DataTypes} = require('sequelize'); //Из пакета sequelize импортируем DataTypes для описания типов даных полей

//Модели https://sequelize.org/master/manual/model-basics.html
// sequelize.define(modelName, attributes, options) - синтаксис определения модели
//!!! Нам нет нужды добавлять внешние ключи, т.к они добавляются автоматически при использовании ф-ций belongsToMany, hasMany и т.д

//Модель пользователя
const User = sequelize.define('user',{ //user - имя модели(как и имя в бд) (modelName)
    //Ниже описываются поля модели user
    id: {type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true}, //поле id:{тип данных(int),первичный ключ, автоинкремент}
    email:{type: DataTypes.STRING, unique: true}, // поле email:{тип данных(string), уникальное}
    password: {type:DataTypes.STRING}, //поле password:{тип данных(string)}
    role: {type: DataTypes.STRING, defaultValue:"USER"} //поле role:{тип данных(string), знач. по умолч.("USER")}
})

//Модель корзины
const Basket = sequelize.define('basket',{
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},

})

//Модель девайсов в корзине
const BasketDevice = sequelize.define('basket_device',{
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},

})

//Модель девайса
const Device = sequelize.define('device',{
    id: {type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name: {type:DataTypes.STRING, unique: true, allowNull:false},
    price: {type:DataTypes.INTEGER, allowNull: false},
    rating: {type:DataTypes.INTEGER, defaultValue: 0},
    img:{type:DataTypes.STRING, allowNull:false}
})

//Модель типа(категории)
const Type = sequelize.define('type',{
    id: {type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name:{type:DataTypes.STRING, unique:true,allowNull:false}
})

//Модель бренда
const Brand = sequelize.define('brand',{
    id: {type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name:{type:DataTypes.STRING, unique:true,allowNull:false}
})

//Модель рейтинга
const Rating = sequelize.define('rating',{
    id: {type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name: {type:DataTypes.STRING, unique:true, allowNull:false}
})

//Модель информации о дейвайсе
const DeviceInfo = sequelize.define('device_info',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    title:{type:DataTypes.STRING, allowNull:false},
    description: {type:DataTypes.STRING, allowNull: false}
})

//Связующая модель тип - бренд для своязи много ко многим
// (чтобы указать в belongsToMany(options) в параметре options.through)
const TypeBrand = sequelize.define('type_brand',{
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement:true},

})

// Описание связей между моделями https://sequelize.org/master/manual/assocs.html
//Список ассоциацией (методов для связи моделей)
// A.hasOne(B); // A HasOne B (The HasOne association)
    // означает объединение , что отношения один-к-одному существует между Aи B, с внешним ключом определяется в целевой модели ( B).
// A.belongsTo(B); // A BelongsTo B (The BelongsTo association)
    //означает объединение , что отношения один-к-одному существует между Aи B, с внешним ключом определяется в модели источника ( A).
// A.hasMany(B); // A HasMany B (The HasMany association)
    //означает , что один-ко-многим существует между Aи B, с внешним ключом определяется в целевой модели ( B).
// A.belongsToMany(B, { through: 'C' }); (The BelongsToMany association)
    // означает , что существует много-ко-многим между Aи B, используя таблицу в Cкачестве распределительной таблицы , которая будет иметь внешние ключи

// Для того, чтобы создать один к одному отношения, то hasOneи belongsToассоциации используются вместе;
// Для того, чтобы создать один-ко-многим отношений, hasManyи belongsToассоциации используются вместе;
// Чтобы создать отношение « многие ко многим» , два belongsToManyвызова используются вместе.


//Пользователь - коризна
User.hasOne(Basket)
Basket.belongsTo(User)

//Пользователь - рейтинг
User.hasMany(Rating)
Rating.belongsTo(User)

//Коризна - Девайс в коризне
Basket.hasMany(BasketDevice)
BasketDevice.belongsTo(Basket)

//Тип - устрйоство
Type.hasMany(Device)
Device.belongsTo(Type)

//Бренд - устройство
Brand.hasMany(Device)
Device.belongsTo(Brand)

//Девайс - рейтинг
Device.hasMany(Rating)
Rating.belongsTo(Device)

//Девайс - девайс в коризне
Device.hasMany(BasketDevice)
BasketDevice.belongsTo(Device)

//Девайс - инфо о девайсе
Device.hasMany(DeviceInfo, {as:"info"}); //В options.as указываем название поле, которе будет у массива харакеристик
DeviceInfo.belongsTo(Device);

//Тип - бренд
Type.belongsToMany(Brand,{through:TypeBrand}) //(т.к связь много ко ко многим - belongsToMany !! )
Brand.belongsToMany(Type,{through:TypeBrand}) //Также нужно определить в параметре options.through промежуточную таблицу


//Эскопритурем все модели
module.exports = {
    User,
    Basket,
    BasketDevice,
    Device,
    Type,
    Brand,
    Rating,
    TypeBrand,
    DeviceInfo
}