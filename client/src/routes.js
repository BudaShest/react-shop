//В этом файле будут описаны все маршурты для нашео приложения (клиент)

import {ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "./utils/consts"; //Импортируем константы, содержащие пути
import Admin from "./pages/Admin";
import Basket from "./pages/Basket";
import DevicePage from "./pages/DevicePage";
import Shop from "./pages/Shop";
import Auth from "./pages/Auth";


//В этом массиве будут маршруты только для авторизванных пользователей
export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component:Admin,
    },
    {
        path: BASKET_ROUTE,
        Component:Basket
    },

]


//В этом массиве будут все маршруты
export const publicRoutes = [
    {
        path: DEVICE_ROUTE + "/:id", //Машрут с параметром (айди устройства)
        Component:DevicePage
    },
    {
        path: SHOP_ROUTE,
        Component:Shop
    },
    {
        path: LOGIN_ROUTE,
        Component:Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component:Auth
    },
]