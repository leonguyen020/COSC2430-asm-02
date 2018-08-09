import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// import $ from 'jquery'

// Actions
import * as typeActions from '../../actions/typeActions';
// Child components
import TypesList from '../../components/ProductTypes/TypesList';

class ProductTypePage extends React.Component {
    constructor(props){
        super(props);
        this.deleteProductType = this.deleteProductType.bind(this);
    }

    deleteProductType(id){
        if (window.confirm('Are you sure you want to delete this product?')) {
            this.props.actions.deleteType(id);
        }
    }
    render(){
        // const {product} = this.props;
        return(
            <div className="products">
                {
                    this.props.ajaxLoading ?
                        <p className="text-center alert alert-info">Loading categories...</p>
                        :
                        <TypesList productType={this.props.productType} pages={this.props.pages}
                                onDeleteProductType={this.deleteProductType} currentPage={this.props.currentPage} />
                }
            </div>
        )
    }
}

function generateProductTypesByPage(productType, pageNo) {
    // I assumed showing 10 categories per page
    const perPage = 10;
    if (productType.length) {
        // Filter 10 categories by page number
        return productType.filter((productType, i) => {
            return i >= perPage*(pageNo-1) && i < perPage*pageNo;
        });
    }
    return [];
}

function mapStateToProps(state, ownProps) {
    // Set page number to 1 if no number in url params
    let pageNo = ownProps.match.params.pageNo || 1;
    let productType = generateProductTypesByPage(state.productType, pageNo);
    return {
        productType: productType,
        pages: Math.ceil(state.productType.length / 10), // Determine number of pages for pagination
        currentPage: pageNo,
        ajaxLoading: state.ajaxLoading
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(typeActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductTypePage);