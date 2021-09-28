//Этот файл - роутер нашего приложения
import React, {useContext} from 'react';
import {Route, Switch, Redirect} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes"; //Импортиурем массив с роутами, доступными только авторизованному пользователю
import {SHOP_ROUTE} from "../utils/consts";
import {Context} from '../index';

const AppRouter = () => {
    const {user} = useContext(Context);
    console.log(user);
    return (
        <Switch>
            {
                (user.isAuth && authRoutes.map(({path,Component})=>{
                    return <Route key={path} path={path} component={Component} exact/>
                }))
            }
            {
                publicRoutes.map(({path,Component})=>{
                    return <Route key={path} path={path} component={Component} exact/>
                })
            }
            //Т.к если в Switch не отработал не один из машрутов, выбирается последний, то добавим редирект
            <Redirect to={SHOP_ROUTE}/>
        </Switch>
    );
};

export default AppRouter;