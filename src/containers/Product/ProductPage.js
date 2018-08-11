import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// import $ from 'jquery'

// Actions
import * as productActions from '../../actions/productActions';
// Child components
import ProductsList from '../../components/Product/ProductsList';

class ProductPage extends React.Component {
    constructor(props){
        super(props);
        this.deleteProduct = this.deleteProduct.bind(this);
    }

    deleteProduct(id){
        if (window.confirm('Are you sure you want to delete this product?')) {
            this.props.actions.deleteProduct(id);
        }
    }
    render(){
        return(
            <div className="products">
                {
                    this.props.ajaxLoading ?
                        <p className="text-center alert alert-info">Loading products...</p>
                        :
                        <ProductsList product={this.props.product} pages={this.props.pages}
                                    productType={this.props.productType}
                                    onDeleteProduct={this.deleteProduct} currentPage={this.props.currentPage} />
                }
            </div>
        )
    }
}

function generateProductsByPage(product, pageNo) {
    // I assumed showing 10 merchants per page
    const perPage = 10;
    if (product.length) {
        // Filter 10 merchants by page number
        return product.filter((product, i) => {
            return i >= perPage*(pageNo-1) && i < perPage*pageNo;
        });
    }
    return [];
}

function mapStateToProps(state, ownProps) {
    // Set page number to 1 if no number in url params
    let pageNo = ownProps.match.params.pageNo || 1;
    let product = generateProductsByPage(state.product, pageNo);
    return {
        product: product,
        productType:state.productType, // Product Type State in InitialState
        pages: Math.ceil(state.product.length / 10), // Determine number of pages for pagination
        currentPage: pageNo,
        ajaxLoading: state.ajaxLoading
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(productActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);