import React, { ReactNode } from 'react';
import classes from './Bookshelf.module.css';;

export const Bookshelf = (props: {children: ReactNode, title?: string}) => {
    return (
        <div className={classes["bookshelf"]}>
            { props.title && <h2 className={classes["bookshelf-title"]}>{props.title}</h2>}
            <div className={classes["bookshelf-books"]}>
                <ol className={classes["books-grid"]}>
                    {props.children}
                </ol>
            </div>
        </div>
    )
};

export default Bookshelf;