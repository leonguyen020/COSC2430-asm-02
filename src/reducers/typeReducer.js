// import { combineReducers } from 'redux'
// Action type
import * as types from '../actions/actionTypes';
// import initialState from '../store/initialState';

export default function TypeReducer(state = [], action) {
    switch (action.type) {
        case types.SET_TYPE:
            return action.productType;
        case types.ADD_TYPE:
            var newType = [...state, action.productType] 
            return newType;
        case types.EDIT_TYPE:
            return [
                ...state.filter(productType => productType.id !== action.productType.id),
                Object.assign({}, action.productType)
            ];
        case types.DELETE_TYPE:
            var newTypes = state.filter(productType=>{
                return productType._id !== action.id
            })
            return newTypes
        default:
            return state;
    }
}