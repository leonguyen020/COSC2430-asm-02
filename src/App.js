import React, { Component } from 'react';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';

import logo from './assets/images/Sitelogo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/styles.css';

// Containers & Component
import ProductsPage from './containers/Product/ProductPage'
import AddProductPage from './containers/Product/AddProductPage'
import EditProductPage from './containers/Product/EditProductPage'

// Categories
import ProductsTypePage from './containers/ProductTypes/ProductTypePage'
import AddTypePage from './containers/ProductTypes/AddTypePage'
import EditTypePage from './containers/ProductTypes/EditTypePage'


class App extends Component {
    render() {
        return (
        <Router>
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <nav className="main-nav">
                        <ul>
                            <li>
                                <NavLink activeClassName="selected" to="/products/1">Products list</NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="selected" to="/productTypes/1">Categories list</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="container">
                    {/* Product */}
                    <Route path="/products/:pageNo?" component={ProductsPage}/>
                    <Route path="/add-product" component={AddProductPage}/>
                    <Route path="/edit-product/:id" component={EditProductPage}/>
                    
                    {/* Categories */}
                    <Route path="/productTypes/:pageNo?" component={ProductsTypePage}/>
                    <Route path="/add-types" component={AddTypePage}/>
                    <Route path="/edit-type/:id" component={EditTypePage}/>
                </div>
            </div>
        </Router>
        );
    }
}

export default App;
