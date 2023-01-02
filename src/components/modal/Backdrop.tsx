import classes from './Backdrop.module.css';

export const Backdrop = (props: { onClick?: () => void }) => {
    return <div onClick={props.onClick} className={classes.backdrop}></div>
}

export default Backdrop;