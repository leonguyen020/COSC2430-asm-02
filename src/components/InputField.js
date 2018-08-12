import React from 'react'
import { withRouter } from 'react-router-dom';

export const TextAreaField =({
    input,
    label,
    id,
    rows,
    meta:{touched,error}
})=>(
    <div className="form-group">
        <label htmlFor={id}>
            {label}
        </label>
        
        <textarea {...input} id={id} rows={rows} className="form-control" />

        {touched &&
        (error &&
        <span className="error-text">
            {error}
        </span>)}
    </div>
)

export const SelectField = ({
    input,
    label,
    id,
    children,
    meta: {touched, error},
})=>(
    <div className="form-group">
        <label htmlFor={id}>
            {label}
        </label>

        <select className="form-control" {...input}>
            <option value="">Choose your categories</option>
            {children}
        </select>


        {touched &&
        (error &&
        <span className="error-text">
            {error}
        </span>)}

    </div>
);

export const renderField = ({
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

// Button

export const AddProductButton = withRouter(({ history }) => (
    <button
      type='button'
      className="btn btn-primary"
      style={{"marginBottom":"20px"}}
      onClick={() => { history.push('/add-product') }}
    >
        <i className="fa fa-plus"> Add new product</i>
    </button>
))

export const RedirectButton = withRouter(({ history }) => (
    <button
      type='button'
      className="btn btn-success formSubmitBtn"
      onClick={() => { history.push('/products/1') }}
    >
        Back to product list!
    </button>
))