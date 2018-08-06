import React from 'react';
import {NavLink} from 'react-router-dom';
// Child components
import Pagination from './Pagination';
import NumberFormat from 'react-number-format';

function handleCheck(URL){
    if(URL !== ""){
        return <img className="avatar" src={URL} alt={"Product"}/>
    }else{
        return <span style={{color:'red'}}>Invalid image URL</span>
    }
}

const ProductsList = ({product,onDeleteProduct,pages,currentPage}) => {
    return(
        !product.length ?
        <p className="alert alert-warning text-center">No products found.</p>
        :
        <div>
            <div className="responsive-table">
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Brand</th>
                            <th>Producer</th>
                            <th>Product Image</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {product.map(product=>{
                            return (
                                <tr key={product._id}>
                                    <td>
                                        {product._id}
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
                                        {handleCheck(product.imageUrl)}
                                    </td>
                                    <td>
                                        <NavLink className="btn btn-primary btn-sm"
                                                to={'/edit/' + product._id}>Edit</NavLink>
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