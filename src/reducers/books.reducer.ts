import { AnyAction, createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';

import { getAll } from '../api/books';
import { IBook } from '../dtos';

const name = "books";
const initialState: IBook[] = [];

export const booksSlice = createSlice({
    name,
    initialState,
    reducers: {
        resetBooks: (state, action: PayloadAction<IBook[]>) => {
            return action.payload;
        }
    }
});

export const loadBooks = () => {
    return async (dispatch: Dispatch<AnyAction>) => {
        const books = await getAll();
        dispatch(booksSlice.actions.resetBooks(books));
    }
}

export default booksSlice.reducer;