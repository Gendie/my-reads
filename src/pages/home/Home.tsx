import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/exports';
import { Link } from 'react-router-dom';

import Book from '../../components/book/Book';
import Bookshelf, { BookShelfItem } from '../../components/bookshelf';
import { Shelf, IBook } from '../../dtos';
import { loadBooks, updateBookshelf } from '../../reducers/books.reducer';
import { RootState } from '../../store';
import About from '../about';
import classes from './Home.module.css';

export const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadBooks() as any);
    }, [dispatch]);

    const books = useSelector((store: RootState) => {
        return store.books.books;
    });

    const createBookShelfItem = (book: IBook): JSX.Element => {
        return (
            <BookShelfItem key={book.id}>
                <Book
                    title={book.title}
                    authors={book.authors}
                    thumbnail={book.imageLinks?.thumbnail}
                    shelf={book.shelf}
                    updateShelf={(shelf: Shelf) => updateChildBookshelf(book, shelf)} />
            </BookShelfItem>
        );
    }

    const updateChildBookshelf = (book: IBook, shelf: Shelf) => {
        dispatch(updateBookshelf(book, shelf) as any);
    }

    const currentlyReading = books.filter(book => book.shelf === "currentlyReading");
    const wantToRead = books.filter(book => book.shelf === "wantToRead");
    const read = books.filter(book => book.shelf === "read");

    const [showAbout, setshowAbout] = useState(false);

    const showAboutHandler = () => {
        setshowAbout(true);
    }
    const hideAboutHandler = () => {
        setshowAbout(false);
    }

    return (
        <div className={classes["list-books"]}>
            <div className={classes["list-books-title"]}>
                <h1>My Reads</h1>
                <button onClick={showAboutHandler}>About</button>
                {showAbout && <About close={hideAboutHandler}/>}
            </div>
            <div className={classes["list-books-content"]}>
                <div>
                    <Bookshelf title="Currently Reading">
                        {currentlyReading.map(createBookShelfItem)}
                    </Bookshelf>
                    <Bookshelf title="Want to Read">
                        {wantToRead.map(createBookShelfItem)}
                    </Bookshelf>
                    <Bookshelf title="Read">
                        {read.map(createBookShelfItem)}
                    </Bookshelf>
                </div>
            </div>
            <div className={classes["open-search"]}>
                {/*
                    Link is like the <a></a> tag and it is used here to be able to move
                    from one component into another.
                    It is imported from 'react-router-dom'.
                */}
                {/* TODO Add Search path */}
                <Link to='/search'>Add Book</Link>
            </div>

        </div>
    );
}

export default Home;