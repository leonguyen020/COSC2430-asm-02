import React from 'react'
// import {saveProduct, updateProduct, * as productActions } from '../actions/productActions'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Actions
import * as typeActions from '../../actions/typeActions';

// Component
import TypeForm from '../../components/ProductTypes/TypeForm'

class AddTypePage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            formStatus: null
        };
        this.handleSaveProductType = this.handleSaveProductType.bind(this);
    }
    
    handleSaveProductType = values => {
        this.props.actions.saveType(values);
        this.setState({formStatus: 'success'});
    };

    render(){
        return(
            <TypeForm onSubmit={this.handleSaveProductType} formStatus={this.state.formStatus} />
        )
    }
}

function mapStateToProps(state){
    return{
        typeForm: state.form.productType
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(typeActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTypePage);