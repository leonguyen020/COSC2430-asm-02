import React from 'react';
import { withRouter } from 'react-router-dom';
// Child components
// import NumberFormat from 'react-number-format';
import 'font-awesome/css/font-awesome.min.css';


const BackToProductList = withRouter(({ history }) => (
    <button
      type='button'
      className="btn btn-success"
      style={{"marginBottom":"20px"}}
      onClick={() => { history.push('/products/1') }}
    >
        <i className="fa fa-arrow-left"> Back to product list</i>
    </button>
))

// Clause = productType, condition = product.productType
function findTypeByID(clause,condition){
    return clause.filter((e) => e._id === condition).map(
            e => {return e.name}
    )
}

const DetailsList = ({productType,product}) => {
    
    let productTypeResult;
    if(product.productType == null){
        productTypeResult = <span style={{color:'red'}}>Unidentified</span>
        // return productTypeResult;
    }else{
        productTypeResult = findTypeByID(productType,product.productType);
    }

    return (
    !product ?
    <p className="alert alert-warning text-center">No products found.</p>
    :
    <div className="content-wrapper">
        <div className="col-md-12">
            <div className="col-md-4">
                {/* product image goes here */}
                <img src={product.imageUrl} alt={product.name} width="100%"/>
            </div>
        <div className="col-md-8">
         {/* product details goes here */}
            <h1>{product.name}</h1>
            <p>
                <span style={{fontWeight:'bold'}}>Description: </span>
                {
                    product.description ? product.description : "No description has been inserted!"
                }
            </p>
            <p>
                <span style={{fontWeight:'bold'}}>Brand: </span>
                {
                    product.brand ? product.brand : "No brand has been inserted!"
                }
            </p>
            <p>
                <span style={{fontWeight:'bold'}}>Producer: </span>
                {
                    product.producer ? product.producer : "No producer has been inserted!"
                }
            </p>
            <p>
                <span style={{fontWeight:'bold'}}>Product Type: </span>
                {
                    productTypeResult
                }
            </p>
            <p>
                <span style={{fontSize:'22px'}}>Price: </span>
                {
                    product.price
                    // ? <NumberFormat value={productPrice} displayType={'text'} thousandSeparator={true} />+" VNĐ" 
                    // : "Invalid price!"
                }
            </p>
    </div>
</div>
        <BackToProductList/>
    </div>
    )
}
export default DetailsList;