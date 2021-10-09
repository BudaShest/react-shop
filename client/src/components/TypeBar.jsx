import React, {useContext} from 'react';
import {observer} from 'mobx-react-lite';
import {Collection, CollectionItem} from 'react-materialize';
import {Context} from '../index'

const TypeBar = observer(() => {
    const {device} = useContext(Context);
    return (
        <Collection>
            {
                device.types.map(type=><CollectionItem href="#" style={{cursor:'pointer'}} active={type.id === device.selectedType.id} onClick={()=>device.setSelectedType(type)} key={type.id}>{type.name}</CollectionItem>)
            }
        </Collection>

    );
});

export default TypeBar;