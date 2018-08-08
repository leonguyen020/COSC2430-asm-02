import React, { Component } from 'react';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';

import logo from './assets/images/Sitelogo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/styles.css';

// Containers & Component
import ProductsPage from './containers/ProductPage'
import AddProductPage from './containers/AddProductPage'
import EditProductPage from './containers/EditProductPage'


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
                                <NavLink activeClassName="selected" to="/products/1">Product list</NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="selected" to="/add">Add product</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="container">
                    <Route path="/products/:pageNo?" component={ProductsPage}/>
                    <Route path="/add" component={AddProductPage}/>
                    <Route path="/edit/:id" component={EditProductPage}/>
                    {/* <Route path="/bids/:id" component={BidsPage}/> */}
                </div>
            </div>
        </Router>
        );
    }
}

export default App;
