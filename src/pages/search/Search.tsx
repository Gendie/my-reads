import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Book from "../../components/book";
import Bookshelf, { BookShelfItem } from "../../components/bookshelf";
import { IBook, Shelf } from "../../dtos";

import { resetSearch, searchAllBooks, updateBookshelf } from "../../reducers/books.reducer";
import { RootState } from "../../store";

export const Search = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(resetSearch() as any);
    }, [dispatch])

    const books = useSelector((store: RootState) => {
        return store.books.searchResult;
    });

    const [debounderTimeout, setDebounderTimeout] = useState<NodeJS.Timeout>();

    const updateQueryHandler = (value: string) => {
        clearTimeout(debounderTimeout);
        setDebounderTimeout(
            setTimeout(() => {
                dispatch(searchAllBooks(value) as any);
            }, 500)
        );
    }

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

    return (
        <div className="search-books">
            <div className="search-books-bar">

                {/*
                Link is like the <a></a> tag and it is used here to be able to move
                from one component into another. It is imported from 'react-router-dom'.
                */}
                <Link to="/" className="close-search" >Close</Link>

                <div className="search-books-input-wrapper">
                    {/*
                    NOTES: The search from BooksAPI is limited to a particular set of search terms.
                    You can find these search terms here:
                    https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                    However, remember that the BooksAPI.search method DOES search by title or author. 
                    So, don't worry if you don't find a specific author or title. 
                    Every search is limited by search terms.
                    */}
                    <input
                        type="text"
                        placeholder="Search by title or author"
                        /*
                        * When writing in the Search field, the query state changes
                        * according to the value 
                        */
                        onChange={(e) => updateQueryHandler(e.target.value)}
                    />
                </div>
            </div>

            <div className="search-books-results">
                <Bookshelf>
                    {books.map(createBookShelfItem)}
                </Bookshelf>
            </div>
        </div>
    );
};

export default Search;