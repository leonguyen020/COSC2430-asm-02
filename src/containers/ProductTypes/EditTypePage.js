import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// Actions
import * as typeActions from '../../actions/typeActions';
// Child components
import TypeForm from '../../components/ProductTypes/TypeForm';

class EditTypePage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            formStatus: null
        };
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleEdit = values => {
        let typeEdited = Object.assign({},values,{
            _id: values._id
        });
        this.props.actions.updateType(typeEdited);
        this.setState({formStatus: 'success'});
    }
    

    render(){
        return(
            this.props.ajaxLoading ?
                <p className="text-center alert alert-info">Loading categories...</p>
                :
                !this.props.currentProductType ?
                    <p className="text-center alert alert-danger">Categories not found.</p>
                    :
                    <div className="add-merchant">
                        <h1 className="text-center text-capitalize">Edit categories information</h1>
                        <TypeForm onSubmit={this.handleEdit} formStatus={this.state.formStatus}
                                      initialValues={this.props.currentProductType} goBack={this.props.goBack} />
                    </div>
        )
    }
}

// Find current product

function findCurrentProductType(productType,_id){
    return productType.find(productType => {
        return productType._id === _id;
    });
}

function mapStateToProps(state, ownProps) {
    let currentProductType = state.productType.length ? findCurrentProductType(state.productType, ownProps.match.params.id) : null;
    return {
        currentProductType,
        typeForm: state.form.productType,
        ajaxLoading: state.ajaxLoading,
        goBack: ownProps.history.goBack
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(typeActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditTypePage);