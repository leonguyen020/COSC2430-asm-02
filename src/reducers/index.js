import { combineReducers } from 'redux';
import { reducer as ProductForm } from 'redux-form';
// Reducers
import product from './productReducer';
import ajaxLoading from './ajaxLoadingReducers';
// import * as types from '../actions/actionTypes';

// function editedProductReducer(state = {}, action){
//     switch(action.type){
//       case types.FETCH_BY_ID:
//         return action.editedProduct
//       case types.ADD_NEW_PRODUCT:
//         return initialEditedProduct
//       default: 
//         return state
//     }
// }

const rootReducer = combineReducers({
    product,
    // editedProductReducer,
    ajaxLoading,
    form: ProductForm
});
export default rootReducer;