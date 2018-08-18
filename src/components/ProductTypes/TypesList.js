// Library
import React from 'react';
import {NavLink} from 'react-router-dom';
import { withRouter } from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';
// Child components
import Pagination from './Pagination';

const AddTypeButton = withRouter(({ history }) => (
    <button
      type='button'
      className="btn btn-primary"
      style={{"marginBottom":"20px"}}
      onClick={() => { history.push('/add-types') }}
    >
        <i className="fa fa-plus"> Add new categories</i>
    </button>
))

const TypesList = ({productType,onDeleteProductType,pages,currentPage}) => {
    return(
        !productType.length ?
        <p className="alert alert-warning text-center">No categories found.</p>
        :
        <div>
            <AddTypeButton/>
            <div className="responsive-table">
                <table className="table table-bordered table-striped table-list-search">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productType.map(productType=>{
                            return (
                                <tr key={productType._id}>
                                    <td>
                                        {productType._id}
                                    </td>
                                    <td>
                                        {productType.name}
                                    </td>
                                    <td>
                                        <NavLink className="btn btn-primary btn-sm"
                                                to={'/edit-type/' + productType._id}>Edit</NavLink>
                                    </td>
                                    <td>
                                        <button className="btn btn-sm btn-danger"
                                                onClick={() => onDeleteProductType(productType._id)}>
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
export default TypesList;