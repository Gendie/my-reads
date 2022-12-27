import classes from './Book.module.css';

export const Book = (prop: { title: string, authors: string[], thumbnail: string }) => {
    return (
        <div className={classes["book"]}>
            <div className={classes['book-top']}>
                <div className={classes.bookCover} style={{
                    width: 128,
                    height: 193,
                    backgroundImage: `url("${prop.thumbnail}")`
                }}></div>
                <div className={classes["book-shelf-changer"]}>
                    <select>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
            <div className={classes["book-title"]}>{prop.title}</div>
            <div className={classes["book-authors"]}>{prop.authors.join(', ')}</div>
        </div>
    )
}

export default Book;