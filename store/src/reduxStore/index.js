
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import cart from './cartReducer'
import thunk from 'redux-thunk';
import products from './productsReducer';
import categories from './categoriesReducer';;

let reducers = combineReducers({categories, products,cart});

const store = () => {
    return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
}

export default store();