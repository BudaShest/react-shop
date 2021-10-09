//Файл с админ-панелью
import React from 'react';
import {Container, Button, Row} from "react-materialize";
import CreateType from "../components/modals/CreateType";
import CreateBrand from '../components/modals/CreateBrand';
import CreateDevice from "../components/modals/CreateDevice";

const Admin = () => {

    return (
        <Container style={{padding:"24px 0"}}>
            <CreateType/>
            <CreateBrand/>
            <CreateDevice/>

        </Container>
    );
};

export default Admin;