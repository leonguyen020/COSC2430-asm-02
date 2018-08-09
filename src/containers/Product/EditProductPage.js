import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// Actions
import * as productActions from '../../actions/productActions';
// Child components
import ProductForm from '../../components/Product/ProductForm';

class EditProductPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            formStatus: null
        };
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleEdit = values => {
        let productEdited = Object.assign({},values,{
            _id: values._id
        });
        this.props.actions.updateProduct(productEdited);
        this.setState({formStatus: 'success'});
    }
    

    render(){
        return(
            this.props.ajaxLoading ?
                <p className="text-center alert alert-info">Loading product...</p>
                :
                !this.props.currentProduct ?
                    <p className="text-center alert alert-danger">Product not found.</p>
                    :
                    <div className="add-merchant">
                        <h1 className="text-center text-capitalize">Edit product information</h1>
                        <ProductForm onSubmit={this.handleEdit} formStatus={this.state.formStatus}
                                      initialValues={this.props.currentProduct} goBack={this.props.goBack} />
                    </div>
        )
    }
}

// Find current product

function findCurrentProduct(product,_id){
    return product.find(product => {
        return product._id === _id;
    });
}

function mapStateToProps(state, ownProps) {
    let currentProduct = state.product.length ? findCurrentProduct(state.product, ownProps.match.params.id) : null;
    return {
        currentProduct,
        productForm: state.form.product,
        ajaxLoading: state.ajaxLoading,
        goBack: ownProps.history.goBack
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(productActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProductPage);