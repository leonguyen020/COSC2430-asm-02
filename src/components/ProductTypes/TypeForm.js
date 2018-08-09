import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { withRouter } from 'react-router-dom'

const RedirectButton = withRouter(({ history }) => (
    <button
      type='button'
      className="btn btn-success formSubmitBtn"
      onClick={() => { history.push('/productTypes/1') }}
    >
        Back to categories list!
    </button>
))

let TypeForm = props => {
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
                    <Field name="name" type="text"
                        id="name" label="Name"
                        component={renderField}
                        />
                    {redirectButton()}
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
        errors.name = 'Please enter product type name';
    }
    return errors;
}

TypeForm = reduxForm({
    form: 'TypeForm',
    validate,
    enableReinitialize: true
})(TypeForm);

export default TypeForm;