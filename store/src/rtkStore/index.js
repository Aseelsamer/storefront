import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import categories from './categorySlicer';
import products from './productSlicer';
import cart from './cartSlicer';


const reducers = combineReducers({categories: categories, products: products, cart: cart })
const store = configureStore({ reducer: reducers});

export default store;