import { Shelf } from '../../dtos';
import classes from './Book.module.css';

export const Book = (props: { title: string, authors: string[], thumbnail: string, shelf: Shelf, updateShelf: (shelf: Shelf) => void }) => {

    const changeShelfHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const shelf = e.target.value as Shelf;
        props.updateShelf(shelf);
    }

    return (
        <div className={classes["book"]}>
            <div className={classes['book-top']}>
                <div className={classes.bookCover} style={{
                    width: 128,
                    height: 193,
                    backgroundImage: props.thumbnail && `url("${props.thumbnail}")`
                }}></div>
                <div className={classes["book-shelf-changer"]}>
                    <select data-testid='select' onChange={changeShelfHandler} value={props.shelf || 'none'}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        && <option value="none">None</option>
                    </select>
                </div>
            </div>
            <div className={classes["book-title"]}>{props.title}</div>
            {props.authors && <div className={classes["book-authors"]}>{props.authors.join(', ')}</div>}
        </div>
    )
}

export default Book;