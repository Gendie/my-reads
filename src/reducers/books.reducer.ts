import { AnyAction, createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit'
import { getAll, search, update } from '../api/books';
import { Shelf, IBook } from '../dtos';

interface IState {
    books: IBook[],
    searchResult: IBook[]
}

const name = "books";
const initialState: IState = {
    books: [],
    searchResult: []
}

export const booksSlice = createSlice({
    name,
    initialState,
    reducers: {
        resetBooks: (state, action: PayloadAction<IBook[]>) => {
            return {
                ...state,
                books: action.payload
            };
        },
        updateShelf: (state, action: PayloadAction<{ bookId: string, shelf: Shelf }>) => {
            const bookIndex = state.books.findIndex(b => b.id === action.payload.bookId);
            const newState: IState = {
                books: [...state.books],
                searchResult: state.searchResult
            }
            if (bookIndex !== -1) {
                newState.books[bookIndex] = { ...state.books[bookIndex], shelf: action.payload.shelf }
            }
            return newState;
        },
        createBook: (state, action) => {
            return {
                ...state,
                books: [...state.books, action.payload]
            };
        },
        updateSearch: (state, action: PayloadAction<IBook[]>) => {
            return {
                ...state,
                searchResult: action.payload.map(resultBook => {
                    const book = state.books.find(book => book.id === resultBook.id);
                    return {
                        ...resultBook,
                        shelf: book?.shelf || 'none'
                    }
                })
            };
        },
        resetSearch: (state) => {
            return {
                ...state,
                searchResult: []
            }
        }
    }
});

export const loadBooks = () => {
    return async (dispatch: Dispatch<AnyAction>) => {
        const books = await getAll();
        dispatch(booksSlice.actions.resetBooks(books));
    }
}

export const updateBookshelf = (book: IBook, shelf: Shelf) => {
    return async (dispatch: Dispatch<AnyAction>) => {
        await update({ ...book, shelf });
        dispatch(booksSlice.actions.updateShelf({ bookId: book.id, shelf }));
    };
};

export const searchAllBooks = (query: string) => {
    return async(dispatch: any) => {
        const trimmedQuery = query.replace(/^\s+/, '');
        if(!trimmedQuery) {
            dispatch(booksSlice.actions.updateSearch([]));
            return;
        }
        const searchResults = await search(trimmedQuery);
        if(searchResults?.length) {
            dispatch(booksSlice.actions.updateSearch(searchResults));
        }
        else {
            dispatch(booksSlice.actions.updateSearch([]));
        }
    }
}

export const resetSearch = () => {
    return (dispatch: any) => {
        dispatch(booksSlice.actions.resetSearch())
    }
}

export default booksSlice.reducer;