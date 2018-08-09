// import { combineReducers } from 'redux'
// Action type
import * as types from '../actions/actionTypes';
// import initialState from '../store/initialState';

export default function ProductReducer(state = [], action) {
    switch (action.type) {
        case types.SET_PRODUCT:
            return action.product;
        case types.ADD_PRODUCT:
            var newProduct = [...state, action.product] 
            return newProduct;
        case types.EDIT_PRODUCT:
            return [
                ...state.filter(product => product.id !== action.product.id),
                Object.assign({}, action.product)
            ];
        case types.DELETE_PRODUCT:
            var newProducts = state.filter(product=>{
                return product._id !== action.id
            })
            return newProducts
        default:
            return state;
    }
}