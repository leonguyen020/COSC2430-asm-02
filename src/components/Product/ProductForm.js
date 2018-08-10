import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { withRouter } from 'react-router-dom'

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
    const { handleSubmit, formStatus } = props;

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
                            id="producer" label="Categories"
                            component={renderField}
                            />
                        <Field name="imageUrl" type="url"
                            id="imageUrl" label="Image Url"
                            component={renderField}
                            />
                    </div>
                    <div className="col-md-6 col-xs-12">
                        <Field name="description" type="textarea"
                            id="description" label="Description"
                            component={renderField}
                            rows="16"
                        />
                    </div>
                    <div className="col-md-12 col-xs-12">
                        {redirectButton()}
                    </div>
                </div>
            </form>
        </div>
    )
}

const renderField = ({
    input,
    label,
    type,
    id,
    meta: {touched, error}
})=>(
    <div className="form-group">
        <label htmlFor={id}>
            {label}
        </label>
        <input {...input} id={id} type={type} className="form-control"/>
        {touched &&
        (error &&
        <span className="error-text">
        {error}
        </span>)}
    </div>
)

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