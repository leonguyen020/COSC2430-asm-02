import axios from 'axios';
import * as type from './actionTypes';


var header ={
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
}
var url = "http://rmit.chickenkiller.com:8080/products";

// Set data
export function setProduct(product){
    return { type: type.SET_PRODUCT,product };
}

// Loading with ajax
export function ajaxLoading(status){
    return { type: type.AJAX_LOADING, status };
}

// // Fetch data
// export function fetchAll(){
//     return dispatch => {
//         dispatch(ajaxLoading(true));
//         fetch("http://rmit.chickenkiller.com:8080/products") // Receive API
//         .then(response => {
//             dispatch(setProduct(response.data));
//             dispatch(ajaxLoading(false));
//         })
//         .catch(error => {
//             console.log(error);
//             dispatch(ajaxLoading(false));
//         })
//     }
// }

export function getProducts(){
    return dispatch => {
        dispatch(ajaxLoading(true));
        axios.get("http://rmit.chickenkiller.com:8080/products",{
            body: JSON.stringify()
        }) // Receive API
            .then(response => {
                console.log(response.data);
                dispatch(setProduct(response.data));
                dispatch(ajaxLoading(false));
            })
            .catch(error => {
                console.log(error);
                dispatch(ajaxLoading(false));
            })
    }
}

export function fetchByID(id){
    
    return function(dispatch){
        dispatch(ajaxLoading(true));
        fetch(`${url}/${id}`, {
            method: 'GET',
        })
        .then( (res)=> {return res.json()} )
        .then((data)=>{
            dispatch({type: 'FETCH_BY_ID', fetchById: data})
        })   
    }
}

// Add new data
export function saveProduct(product){
    return function(dispatch){
        fetch(`${url}`, {
            headers: header,
            method: 'post', 
            body: JSON.stringify(product)
        })
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            dispatch({type:'ADD_PRODUCT', product: data});
        })
    }
}

// Edit data
export function updateProduct(product){
    return function(dispatch){
        console.log(product)

        fetch(`${url}`, {
            headers: header,
            method: 'put', 
            body: JSON.stringify(product)
        })
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            dispatch(getProducts())
        })
    }
}

// Delete data
export function deleteProduct(id){
    return function(dispatch){
        console.log(id)
        fetch(`${url}/${id}`, {
            method: 'delete', 
        })
        .then((res)=>
            {return res.json()})
        .then((data)=>{
            console.log(data)
            dispatch({type: 'DELETE_PRODUCT', id: id})
        })   
    }
}