import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { withRouter } from 'react-router-dom'
// Child component
import { renderField,SelectField,TextAreaField } from '../InputField'

const RedirectButton = withRouter(({ history }) => (
    <button
      type='button'
      className="btn btn-success formSubmitBtn"
      onClick={() => { history.push('/products/1') }}
    >
        Back to product list!
    </button>
))

let ProductForm = props => {
    const { handleSubmit, formStatus, productType} = props;

    function redirectButton(){
        if(formStatus === null){
            return(
                <button type="submit" className="btn btn-primary formSubmitBtn">Submit</button>
            )
        }else if(formStatus === 'success'){
            return(
                <RedirectButton/>
            )
        }
    }
    return (
        <div className="row" style={{marginTop:'25px',display:'block'}}>
            <form className="form-group" onSubmit={handleSubmit} noValidate>
                <div className="col-lg-12 col-md-12 col-xs-12">
                    <div className="col-md-6 col-xs-12">
                        <Field name="name" type="text"
                            id="name" label="Name"
                            component={renderField}
                        />
                        <Field name="price" type="tel"
                            id="price" label="Price"
                            component={renderField}
                        />
                        <Field name="brand" type="text"
                            id="brand" label="Brand"
                            component={renderField}
                        />
                        <Field name="producer" type="text"
                            id="producer" label="Producer"
                            component={renderField}
                            />
                        <Field label="Categories" 
                                component={SelectField} 
                                name="productType" id="productType"
                                children={productType.map((productType,i)=>{
                                    return (
                                        <option key ={i} value={productType._id}>{productType.name}</option>   
                                    );
                                })}
                        />
                        <Field name="imageUrl" type="url"
                            id="imageUrl" label="Image Url"
                            component={renderField}
                        />
                    </div>
                    <div className="col-md-6 col-xs-12">
                        {/* <Field name="description" type="textarea"
                            id="description" label="Description"
                            component={renderField}
                            rows="16"
                        /> */}
                        <Field name="description" id="description" 
                            label="Description" component={TextAreaField}
                            rows="19"/>
                    </div>
                    <div className="col-md-12 col-xs-12">
                        {redirectButton()}
                    </div>
                </div>
            </form>
        </div>
    )
}

const validate = values => {
    const errors= {};

    if(!values.name){
        errors.name = 'Please enter product name';
    }
    
    if(!values.price){
        errors.price = 'Please enter product price';
    }

    if(!values.description){
        errors.description = 'Please enter product description';
    }

    if(!values.brand){
        errors.brand = 'Please enter product brand';
    }

    if(!values.producer){
        errors.producer = 'Please enter product producer';
    }

    if(!values.productType){
        errors.productType = 'Please choose respective product type';
    }

    if(!values.imageUrl){
        errors.imageURL = 'Please enter image URL for product';
    }
    return errors;
}

ProductForm = reduxForm({
    form: 'ProductForm',
    validate,
    enableReinitialize: true
})(ProductForm);

export default ProductForm;