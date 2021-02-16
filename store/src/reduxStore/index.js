// and adding reducers to it
import products from './productsReducer'
import categories from './categoriesReducer'
import cart from './cartReducer';

import {createStore, combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// add as many reducers as you want
let reducers = combineReducers({categories, products,cart});

const store = () => {
    return createStore(reducers, composeWithDevTools())
}

export default store();