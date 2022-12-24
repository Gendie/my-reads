import { Link } from 'react-router-dom';

import Book from '../../components/book/Book';
import Bookshelf, { BookShelfItem } from '../../components/bookshelf';
import classes from './Home.module.css';

export const Home = () => {
    return (
        <div className={classes["list-books"]}>
            <div className={classes["list-books-title"]}>
                <h1>My Reads</h1>
            </div>
            <div className={classes["list-books-content"]}>
                <div>
                    <Bookshelf title="Currently Reading">
                        <BookShelfItem>
                            <Book />
                        </BookShelfItem>
                    </Bookshelf>
                    <Bookshelf title="Want to Read">
                    <BookShelfItem>
                            <Book />
                        </BookShelfItem>
                    </Bookshelf>
                    <Bookshelf title="Read">
                    <BookShelfItem>
                            <Book />
                        </BookShelfItem>
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
                <Link to="/">Add a book</Link>
            </div>

        </div>
    );
}

export default Home;