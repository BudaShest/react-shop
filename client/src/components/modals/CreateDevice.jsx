import React,{useContext, useState} from 'react';
import {Button, Icon, Modal, Row, TextInput, Select, Col} from "react-materialize";
import {Context} from '../../index'

const CreateDevice = () => {
    const {device} = useContext(Context);
    const [info, setInfo] = useState([]);

    const addInfo = ()=>{
        setInfo([...info, {title:'', description:"", number:Date.now()}]);
    }

    const removeInfo = (number)=>{
        setInfo(info.filter(item=>item.number !== number))
    }

    return (
        <Modal
            actions={[
                <Button flat modal="close" node="button" waves="green">Закрыть</Button>
            ]}
            bottomSheet={false}
            fixedFooter={false}
            header="Добавить дейвайс"
            id="Modal-11"
            open={false}
            options={{
                dismissible: true,
                endingTop: '10%',
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                opacity: 0.5,
                outDuration: 250,
                preventScrolling: true,
                startingTop: '4%'
            }}
            root={document.body}
            trigger={<Row><Button node="button">Добавить дейвайс</Button></Row>}
        >
            <form action="">
                <Select
                    id="Select-52"
                    multiple={false}
                    onChange={function noRefCheck(){}}
                    options={{
                        classes: '',
                        dropdownOptions: {
                            alignment: 'left',
                            autoTrigger: true,
                            closeOnClick: true,
                            constrainWidth: true,
                            coverTrigger: true,
                            hover: false,
                            inDuration: 150,
                            onCloseEnd: null,
                            onCloseStart: null,
                            onOpenEnd: null,
                            onOpenStart: null,
                            outDuration: 250
                        }
                    }}

                >
                    {
                        device.types.map(type=> <option value={type.id}>{type.name}</option>)
                    }
                </Select>
                <Select
                    id="Select-53"
                    multiple={false}
                    onChange={function noRefCheck(){}}
                    options={{
                        classes: '',
                        dropdownOptions: {
                            alignment: 'left',
                            autoTrigger: true,
                            closeOnClick: true,
                            constrainWidth: true,
                            coverTrigger: true,
                            hover: false,
                            inDuration: 150,
                            onCloseEnd: null,
                            onCloseStart: null,
                            onOpenEnd: null,
                            onOpenStart: null,
                            outDuration: 250
                        }
                    }}

                >
                    {
                        device.brands.map(brand=> <option value={brand.id}>{brand.name}</option>)
                    }
                </Select>
                <TextInput
                    icon={<Icon>score</Icon>}
                    id="TextInput-51"
                    label="Введите называние устройства:"
                />
                <TextInput
                    icon={<Icon>score</Icon>}
                    id="TextInput-52"
                    type="number"
                    label="Введите цену устройства:"
                />
                <TextInput
                    icon={<Icon>score</Icon>}
                    id="TextInput-53"
                    type="file"
                    label="Прикрепите файл:"
                />
                <hr/>
                <Button type="button" onClick={addInfo}>Добавить новое свойство</Button>
                {
                    info.map(item=><Row key={item.number} style={{margin: '10px'}}>
                        <Col className="valign-wrapper" m={4}>
                            <TextInput
                                icon={<Icon>score</Icon>}
                                id="TextInput-54"
                                type="text"
                                placeholder="Название харакетиристики"
                            />
                        </Col>
                        <Col className="valign-wrapper" m={4}>
                            <TextInput
                                icon={<Icon>score</Icon>}
                                id="TextInput-55"
                                type="text"
                                placeholder="Значение зарактеристики:"
                            />
                        </Col>
                        <Col style={{padding:'10px 14px'}} className="valign-wrapper" m={4}>
                            <Button onClick={()=>removeInfo(item.number)} type="button" style={{backgroundColor:'salmon'}}>Удалить</Button>
                        </Col>
                    </Row>)
                }
                <hr/>

                <Button>Добавить</Button>
            </form>
        </Modal>
    );
};

export default CreateDevice;