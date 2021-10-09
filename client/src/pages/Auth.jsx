//Файл со страницей авторизации
import React from 'react';
import {Container, Card, TextInput, Button, Row} from 'react-materialize';
import {NavLink, useLocation} from 'react-router-dom';
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";

const Auth = () => {
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;
    return (
        <div>
            <Container className="center-align">
                <Card style={{margin:'40px'}}>
                    <h2>{isLogin?"Авторзиация":"Регистрация"}</h2>
                    <form action="">
                        <TextInput
                            id="TextInput-44"
                            label="Email"
                            type="email"
                        />
                        <TextInput
                            id="TextInput-47"
                            label="Пароль"
                            type="password"
                        />
                        <Row>
                            {
                                isLogin?
                                    <div className="col s5">
                                        <p style={{padding:"14px"}} className="valign-wrapper">Нет аккаунта? <NavLink to={REGISTRATION_ROUTE} href="">Зарегистируйтесь</NavLink></p>
                                    </div>
                                    :
                                    <div className="col s5">
                                        <p>Есть аккаунт? <NavLink to={LOGIN_ROUTE} href="">Войдите</NavLink></p>
                                    </div>
                            }
\
                            <Button className="col s6" large node="button" waves="light">
                                {isLogin?'Войти':'Регистрация'}
                            </Button>
                        </Row>
                    </form>
                </Card>

            </Container>
        </div>
    );
};

export default Auth;