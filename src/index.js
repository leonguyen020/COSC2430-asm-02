import React from 'react';
import ReactDOM from 'react-dom';
// Provide
import {Provider} from 'react-redux';
// Initial action to load products & categories list from API
import { getProducts } from './actions/productActions';
import { getTypes } from './actions/typeActions';
// Store config
import configureStore from './store/configureStore';
// App component
import App from './App';
// Register Service Worker
import registerServiceWorker from './registerServiceWorker';


const store = configureStore();
// Load product list from API as soon as application initiates
store.dispatch(getProducts());
store.dispatch(getTypes());
// let store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,document.getElementById('root')
);
registerServiceWorker();
