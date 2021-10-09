import React from 'react';
import {Col, Card, Icon, CardTitle, Chip, Row} from 'react-materialize';
import {useHistory} from 'react-router-dom';
import {DEVICE_ROUTE} from "../utils/consts";

const DeviceItem = ({device}) => {
    const history = useHistory();
    return (
        <Col
            m={4}
        >
            <Card
                onClick={()=>history.push(DEVICE_ROUTE + `/${device.id}`)}
                closeIcon={<Icon>close</Icon>}
                header={<CardTitle style={{height:400}} image={device.img} reveal waves="light"/>}
                reveal={<p>
                    <Row><Chip>Цена: {device.price} руб.</Chip></Row>
                    <hr/>
                    <Row><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, ex, maiores! Asperiores at aut eaque earum omnis quaerat soluta vel voluptas.</p></Row>
                </p>}
                revealIcon={<Icon>more_vert</Icon>}
                title={device.name}
                className="medium hoverable"
            >
                <p>
                    {/*<a href="#">*/}
                    {/*    This is a link*/}
                    {/*</a>*/}
                    <Chip
                        close={false}
                        closeIcon={<Icon className="close">close</Icon>}
                        options={null}
                    >
                        Рейтинг: {device.rating}
                    </Chip>
                </p>
            </Card>
        </Col>
    );
};

export default DeviceItem;