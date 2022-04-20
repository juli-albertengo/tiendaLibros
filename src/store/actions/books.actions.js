import { bookTypes } from '../types/books.types';

const { SELECT_BOOK } = bookTypes;

export const selectBook = (id) => ({
    type: SELECT_BOOK,
    bookId: id,
});
