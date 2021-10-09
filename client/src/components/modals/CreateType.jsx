import React from 'react';
import {Modal, Button, TextInput, Icon, Row} from 'react-materialize';

const CreateType = () => {
    return (
        <Modal
            actions={[
                <Button flat modal="close" node="button" waves="green">Закрыть</Button>
            ]}
            bottomSheet={false}
            fixedFooter={false}
            header="Добавить тип"
            id="Modal-10"
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
            trigger={<Row><Button node="button">Добавить тип</Button></Row>}
        >
            <form action="">
                <TextInput
                    icon={<Icon>score</Icon>}
                    id="TextInput-49"
                    label="Введите называние типа:"
                />
                <Button>Добавить</Button>
            </form>
        </Modal>
    );
};

export default CreateType;