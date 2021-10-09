import React,{useContext} from 'react';
import {observer} from 'mobx-react-lite';
import {Context} from '../index';
import {Row, Card, Col} from 'react-materialize';

const BrandBar = observer(() => {
    const {device} = useContext(Context);
    return (
        <Row>
            {
                device.brands.map(brand => {
                    return (
                        <Col>
                            <Card
                                key={brand.id}
                                style={{height: "50px", cursor: 'pointer', transition: "all 0.4s ease-out"}}
                                onClick={() => device.setSelectedBrand(brand)}
                                className={device.selectedBrand.id === brand.id ? "valign-wrapper white-text teal" : "valign-wrapper"}
                            >
                                {brand.name}
                            </Card>
                        </Col>
                    );
                })
            }
        </Row>
    );
});

export default BrandBar;