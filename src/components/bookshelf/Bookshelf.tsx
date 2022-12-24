import React from 'react';
import classes from './Bookshelf.module.css';;

export const Bookshelf = (props: {children: React.ReactElement, title: string}) => {
    return (
        <div className={classes["bookshelf"]}>
            <h2 className={classes["bookshelf-title"]}>{props.title}</h2>
            <div className={classes["bookshelf-books"]}>
                <ol className={classes["books-grid"]}>
                    {props.children}
                </ol>
            </div>
        </div>
    )
};

export default Bookshelf;