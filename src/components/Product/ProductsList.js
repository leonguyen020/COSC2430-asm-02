import React from 'react';
import {NavLink} from 'react-router-dom';
// Child components
import Pagination from './Pagination';
import NumberFormat from 'react-number-format';
import 'font-awesome/css/font-awesome.min.css';

function handleCheck(URL){
    if(URL !== ""){
        return <img className="avatar" src={URL} alt={"Product"}/>
    }else{
        return <span style={{color:'red'}}>Invalid image URL</span>
    }
}

// Clause = productType, condition = product.productType
function findTypeByID(clause,condition){
    return clause.filter((e) => e._id === condition).map(
            e => {return e.name}
        )
}

const ProductsList = ({productType,product,onDeleteProduct,pages,currentPage}) => {
    return(
        !product.length ?
        <p className="alert alert-warning text-center">No products found.</p>
        :
        <div>
            <div className="responsive-table">
                <table className="table table-bordered table-striped table-list-search">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Brand</th>
                            <th>Producer</th>
                            <th>Product Type</th>
                            <th>Product Image</th>
                            <th>Details</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {product.map((product)=>{
                            let productTypeResult = findTypeByID(productType,product.productType);
                            return (
                                <tr key={product._id}>
                                    <td>
                                        {"..."+product._id.substr(19,24)}
                                    </td>
                                    <td>
                                        {product.name}
                                    </td>
                                    <td>
                                        <NumberFormat value={product.price} displayType={'text'} thousandSeparator={true} />
                                    </td>
                                    <td>
                                        {product.description}
                                    </td>
                                    <td>
                                        {product.brand}
                                    </td>
                                    <td>
                                        {product.producer}
                                    </td>
                                    <td>
                                        {/* {findTypeByID(productType,product.productType)} */}
                                        {
                                            productTypeResult.length 
                                                ? productTypeResult 
                                                : (<span style={{color:'red'}}>Unidentified</span>)
                                        }
                                    </td>
                                    <td>
                                        {handleCheck(product.imageUrl)}
                                    </td>
                                    <td>
                                        <NavLink className="btn btn-success btn-sm"
                                                    to={'/product-details/' + product._id}>View</NavLink>
                                    </td>
                                    <td>
                                        <NavLink className="btn btn-primary btn-sm"
                                                to={'/edit-product/' + product._id}>Edit</NavLink>
                                    </td>
                                    <td>
                                        <button className="btn btn-sm btn-danger"
                                                onClick={() => onDeleteProduct(product._id)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            )
                        }
                        )}
                    </tbody>
                </table>
            </div>
            {   /* Show Pagination */
                pages > 1 && <Pagination pages={pages} currentPage={currentPage}/> 
            }
        </div>
    )
}
export default ProductsList;