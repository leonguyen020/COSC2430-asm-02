import React from 'react'
// import {saveProduct, updateProduct, * as productActions } from '../actions/productActions'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Actions
import * as productActions from '../actions/productActions';

// Component
import ProductForm from '../components/ProductForm'

class CreateUpdatePage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            formStatus: null
        };
    }
    
    handleSaveProduct = values => {
        this.props.actions.saveProduct(values);
        this.setState({formStatus: 'success'});
    };

    render(){
        return(
            <ProductForm onSubmit={this.handleSaveProduct.bind(this)} formStatus={this.state.formStatus} />
        )
    }
}

function mapStateToProps(state){
    return{
        productForm: state.form.product
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(productActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateUpdatePage);