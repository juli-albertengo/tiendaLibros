import { BOOKS } from '../../../constants/books';
import { SELECT_BOOK } from '../../types/books.types';


const initState = {
    books: BOOKS,
    selectedBook: null,
};

const bookReducer = (state = initState, action) => {
    switch (action.type) {
        case SELECT_BOOK:
            return {
                ...state,
                selectedBook: state.products.find(product => product.id === action.productId),
            };
        default:
            return state;
    }
};

export default bookReducer;
