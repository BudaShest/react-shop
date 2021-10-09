import {makeAutoObservable} from "mobx";

export default class DeviceStore{
    constructor() {
        this._types = [
            {id:1, name:'Холодильники'},
            {id:2, name:'Смартфоны'},
            {id:3, name:'Ноутбуки'},
            {id:4, name: 'Микроволновки'}
        ];
        this._selectedType = {};
        this._brands = [
            {id:1, name:'Samsung'},
            {id:2, name:'Apple'},
            {id:3, name:'Huawei'},
            {id:4, name:'Honor'},
            {id:5, name:'Xiaomi'},
            {id:6, name:'Nokia'},
        ];
        this._selectedBrand = {};
        this._devices = [
            {id:1,name:'Iphone 12 Pro',price:100000,rating: 5, img:'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-blue-hero?wid=940&hei=1112&fmt=png-alpha&.v=1604021661000'},
            {id:2,name:'Huawei P40',price:79000,rating: 5, img:'https://www.notebookcheck-ru.com/uploads/tx_nbc2/p40-silver.jpg'},
            {id:3,name:'Samsung Galaxy S10',price:45000,rating: 5, img:'https://cdn1.technopark.ru/technopark/photos_resized/product/600_600/149724/1_149724.jpg'},

            {id:1,name:'Iphone 12 Pro',price:100000,rating: 5, img:'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-blue-hero?wid=940&hei=1112&fmt=png-alpha&.v=1604021661000'},
            {id:2,name:'Huawei P40',price:79000,rating: 5, img:'https://www.notebookcheck-ru.com/uploads/tx_nbc2/p40-silver.jpg'},
            {id:3,name:'Samsung Galaxy S10',price:45000,rating: 5, img:'https://cdn1.technopark.ru/technopark/photos_resized/product/600_600/149724/1_149724.jpg'},

        ]
        makeAutoObservable(this);
    }

    setTypes(types){
        this._types = types;
    }

    setBrands(brands){
        this._brands = brands;
    }

    setDevices(devices){
        this._devices = devices;
    }

    setSelectedType(type){
        this._selectedType = type;
    }

    setSelectedBrand(brand){
        this._selectedBrand = brand;
    }

    get types(){
        return this._types;
    }

    get brands(){
        return this._brands;
    }

    get devices(){
        return this._devices;
    }

    get selectedType(){
        return this._selectedType;
    }

    get selectedBrand(){
        return this._selectedBrand;
    }

}