import ReactDOM from 'react-dom';

import Backdrop from '../../components/modal/Backdrop';
import { Modal } from '../../components/modal/Modal';

export const CreateBook = (props: {close?: () => void}) => {

    return (<>
        {ReactDOM.createPortal(<Backdrop onClick={() => props.close && props.close()}/>, document.getElementById('backdrop-root') as HTMLElement)}
        {ReactDOM.createPortal(<Modal>
            <p style={{textAlign: 'center'}}>My Reads App</p>
        </Modal>, document.getElementById('overlay-root') as HTMLElement)}
    </>);
};

export default CreateBook;