//Все товары
import React from 'react';
import {Container, Row, Col} from "react-materialize";
import TypeBar from '../components/TypeBar';
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";

const Shop = () => {
    return (
        <Container>
            <Row style={{marginTop:"14px"}}>
                <Col
                    s={3}
                >
                    <TypeBar/>
                </Col>
                <Col
                    m={9}
                >
                    <BrandBar/>
                    <DeviceList/>
                </Col>
            </Row>

        </Container>
    );
};

export default Shop;