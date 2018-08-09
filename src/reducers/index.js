import { combineReducers } from 'redux';
import { reducer as Form } from 'redux-form';
// Reducers
import product from './productReducer';
import productType from './typeReducer';
import ajaxLoading from './ajaxLoadingReducers';

const rootReducer = combineReducers({
    product,
    productType,
    ajaxLoading,
    form: Form,
});
export default rootReducer;