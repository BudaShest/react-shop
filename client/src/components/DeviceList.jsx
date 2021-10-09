import React, {useContext} from 'react';
import {observer} from 'mobx-react-lite';
import {Context} from '../index';
import {Row} from "react-materialize";
import DeviceItem from "./DeviceItem";

const DeviceList = observer(() => {
    const {device} = useContext(Context);

    return (
        <Row>
            {
                device.devices.map(device=>{
                    return <DeviceItem key={device.id} device={device}/>
                })
            }
        </Row>
    );
})

export default DeviceList;