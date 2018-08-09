import axios from 'axios';
import * as type from './actionTypes';


var header ={
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
}
var url = "http://rmit.chickenkiller.com:8080/productTypes";

// Set data
export function setType(productType){
    return { type: type.SET_TYPE,productType };
}

// Loading with ajax
export function ajaxLoading(status){
    return { type: type.AJAX_LOADING, status };
}

export function getTypes(){
    return dispatch => {
        dispatch(ajaxLoading(true));
        axios.get("http://rmit.chickenkiller.com:8080/productTypes",{
            body: JSON.stringify()
        }) // Receive API
            .then(response => {
                console.log(response.data);
                dispatch(setType(response.data));
                dispatch(ajaxLoading(false));
            })
            .catch(error => {
                console.log(error);
                dispatch(ajaxLoading(false));
            })
    }
}

export function fetchTypesByID(id){
    
    return function(dispatch){
        dispatch(ajaxLoading(true));
        fetch(`${url}/${id}`, {
            method: 'GET',
        })
        .then( (res)=> {return res.json()} )
        .then((data)=>{
            dispatch({type: 'FETCH_TYPES_BY_ID', fetchTypesById: data})
        })   
    }
}

// Add new data
export function saveType(productType){
    return function(dispatch){
        fetch(`${url}`, {
            headers: header,
            method: 'post', 
            body: JSON.stringify(productType)
        })
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            console.log(data);
            dispatch({type:'ADD_TYPE', productType: data});
        })
    }
}

// Edit data
export function updateType(productType){
    return function(dispatch){
        fetch(`${url}`, {
            headers: header,
            method: 'put', 
            body: JSON.stringify(productType)
        })
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            dispatch(getTypes())
        })
    }
}

// Delete data
export function deleteType(id){
    return function(dispatch){
        console.log(id)
        fetch(`${url}/${id}`, {
            method: 'delete', 
        })
        .then((res)=>
            {return res.json()})
        .then((data)=>{
            dispatch({type: 'DELETE_TYPE', id: id})
        })   
    }
}