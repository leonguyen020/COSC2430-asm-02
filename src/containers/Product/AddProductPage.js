import React from 'react'
// import {saveProduct, updateProduct, * as productActions } from '../actions/productActions'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Actions
import * as productActions from '../../actions/productActions';

// Component
import ProductForm from '../../components/Product/ProductForm'

class AddProductPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            formStatus: null
        };
        this.handleSaveProduct = this.handleSaveProduct.bind(this);
    }
    
    handleSaveProduct = values => {
        this.props.actions.saveProduct(values);
        this.setState({formStatus: 'success'});
    };

    render(){
        return(
            <ProductForm productType={this.props.productType} onSubmit={this.handleSaveProduct} formStatus={this.state.formStatus} />
        )
    }
}

function mapStateToProps(state){
    return{
        productForm: state.form.product,
        productType: state.productType,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(productActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProductPage);