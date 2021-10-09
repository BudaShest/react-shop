import React, {useContext} from 'react';
import {Context} from '../index'; //Импортируем контекст, т.к взависимости от авторизации, навбар будет отображаться по разному
import {Navbar, NavItem, Icon} from "react-materialize";
import {observer} from 'mobx-react-lite';
import {useHistory} from 'react-router-dom';
import {ADMIN_ROUTE, LOGIN_ROUTE} from "../utils/consts";

//Чтобы навбар в реальном времени обновлялся при изменении контектса - нужно обернуть компонент в ф-цию observer
const NavBar = observer(() => {
    const {user} = useContext(Context);
    const history = useHistory();

    return (
        <Navbar
            alignLinks="right"
            className="teal lighten-2"
            brand={<a className="brand-logo" href="#">Девайсер<Icon>cloud</Icon></a>}
            id="mobile-nav"
            menuIcon={<Icon>menu</Icon>}
            options={{
                draggable: true,
                edge: 'left',
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 200,
                preventScrolling: true
            }}
        >
            {user.isAuth? //В зависимости от авторизации отрисовываем разное меню
                    <div className='row'>
                        <NavItem onClick={()=>history.push(ADMIN_ROUTE)} className="col s6" href="#">
                            Админка
                        </NavItem>
                        <NavItem onClick={()=>history.push(LOGIN_ROUTE)} className="col s6" href="#">
                            Выйти
                        </NavItem>
                    </div>
                :
                    <NavItem onClick={()=>user.setIsAuth(true)} href="#">
                        Войти
                    </NavItem>
            }

        </Navbar>
    );
});

export default NavBar;