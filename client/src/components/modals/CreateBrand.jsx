import React from 'react';
import {Button, Icon, Modal, Row, TextInput} from "react-materialize";

const CreateBrand = () => {
    return (
        <Modal
            actions={[
                <Button flat modal="close" node="button" waves="green">Закрыть</Button>
            ]}
            bottomSheet={false}
            fixedFooter={false}
            header="Создать бренд"
            id="Modal-12"
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
            trigger={<Row><Button node="button">Добавить бренд</Button></Row>}
        >
            <form action="">
                <TextInput
                    icon={<Icon>score</Icon>}
                    id="TextInput-50"
                    label="Введите называние бренда:"
                />
                <Button>Добавить</Button>
            </form>
        </Modal>
    );
};

export default CreateBrand;