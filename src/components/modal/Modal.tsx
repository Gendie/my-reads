import { ReactNode } from 'react';
import classes from './Modal.module.css';

export const Modal = (props: { children: ReactNode }) => {
    return (<div className={classes.modal}>
        {props.children}
    </div>)
}