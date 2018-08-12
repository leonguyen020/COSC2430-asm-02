import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// Actions
import * as productActions from '../../actions/productActions';
// Child components
import DetailsList from '../../components/Product/DetailsList';

class DetailsPage extends React.Component{
    // constructor(props){
    //     super(props)
    // }
    render(){
        return (
            <DetailsList product={this.props.currentProduct}
                        productType={this.props.productType}
            />
        )
    }
}

function findCurrentProduct(product,_id){
    return product.find(product => {
        return product._id === _id;
    });
}

function mapStateToProps(state, ownProps) {
    let currentProduct = state.product.length ? findCurrentProduct(state.product, ownProps.match.params.id) : null;
    return {
        currentProduct,
        productType: state.productType,
        ajaxLoading: state.ajaxLoading,
        goBack: ownProps.history.goBack
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(productActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsPage);