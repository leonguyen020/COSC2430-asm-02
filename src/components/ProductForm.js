import React from 'react';
import { reduxForm, Field } from 'redux-form';
import {NavLink} from 'react-router-dom';
// Form
// import {FormControl, FormGroup, ControlLabel} from 'react-bootstrap';


let ProductForm = props => {
    const { handleSubmit, formStatus } = props;
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
                        <Field name="imageURL" type="url"
                            id="imageURL" label="Image Url"
                            component={renderField}
                            />
                    </div>
                    <div className="col-md-6 col-xs-12">
                        {/* <Field componentClass="textarea" component={renderField} rows="16"/> */}
                        {/* <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Description</ControlLabel>
                            <FormControl name="productDescription" 
                                        componentClass="textarea" 
                                        placeholder="Product Description" 
                                        rows="16" 
                                        component={renderField}
                            />
                        </FormGroup> */}
                        {/* <label>Description</label><br/>
                        <textarea name="productDescription" type="textarea"
                                id="productDescription" label="Description"
                                // component={renderField}
                                rows="16"
                                style={textareaStyle}
                        /> */}
                        <Field name="description" type="textarea"
                            id="description" label="Description"
                            component={renderField}
                            rows="16"
                        />
                    </div>
                    <div className="col-md-12 col-xs-12">
                        <button type="submit" className="btn btn-primary formSubmitBtn">Submit</button>
                    </div>
                </div>
            </form>
            {formStatus === 'success' &&
                <p className="alert alert-success">
                    Product successfully saved.
                    <NavLink to="/products/1"> Return to product list</NavLink>
                </p>}
                {formStatus === 'error' &&
                <p className="alert alert-danger">Saving product failed. Please fill in all the fields.</p>
            }
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

    if(!values.imageURL){
        errors.imageURL = 'Please enter image URL for product';
    }
    return errors;
}

ProductForm = reduxForm({
    form: 'ProductForm',
    validate,
})(ProductForm);

export default ProductForm;