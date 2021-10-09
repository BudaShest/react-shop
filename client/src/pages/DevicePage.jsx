//Страница с определённым девайсом
import React from 'react';
import {Container, Col, MediaBox, Row, Chip, Icon, Button,Card, Collection, CollectionItem} from "react-materialize";

const DevicePage = () => {
    const device =  {id:3,name:'Samsung Galaxy S10',price:45000,rating: 5, img:'https://cdn1.technopark.ru/technopark/photos_resized/product/600_600/149724/1_149724.jpg'};

    const description = [
        {id:1, title:'Something', description:"Value"},
        {id:2, title:'Something', description:"Value"},
        {id:3, title:'Something', description:"Value"},
        {id:4, title:'Something', description:"Value"},
    ]

    return (
        <Container style={{padding:"24px 0"}}>
            <Row>
                <Col m={4}>
                    <MediaBox
                        id="MediaBox_9"
                        options={{
                            inDuration: 275,
                            onCloseEnd: null,
                            onCloseStart: null,
                            onOpenEnd: null,
                            onOpenStart: null,
                            outDuration: 200
                        }}
                    >
                        <img
                            alt=""
                            src={device.img}
                            width="300"
                        />
                    </MediaBox>

                </Col>
                <Col m={4}>
                    <Row>
                        <h2>{device.name}</h2>
                        <div>
                            <Chip
                                close={false}
                                closeIcon={<Icon className="close">close</Icon>}
                                options={null}
                            >
                                Рейтинг {device.rating}
                            </Chip>
                        </div>
                    </Row>
                </Col>
                <Col m={4}>
                    <Card>
                        <h4>Цена: {device.price} руб.</h4>
                        <Button

                        >
                            Добавить в коризну
                        </Button>
                    </Card>
                </Col>
            </Row>
            <Collection header={<h4>Харакетристики</h4>}>
                {
                    description.map(item=><CollectionItem key={item.id} style={{display:'flex', justifyContent:"space-evenly",backgroundColor:item.id%2===0?"lightgray":"snow"}}>
                        <span>{item.title}</span>
                        <span>{item.description}</span>
                    </CollectionItem>)
                }
            </Collection>
        </Container>
    );
};

export default DevicePage;