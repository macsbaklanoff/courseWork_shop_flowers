import { act } from "react";
import { contains } from "./contains_flower";

let initialState = {
    product: {},
    arrayFlowerForBascet: [],
    arrayRelatedProductsForBascet:[],
}

export const reducer = (state = initialState, action) => {   
    if (action.type == 'setFlower') {
        return {...state, product: action.payload}
    }
    if (action.type == 'getFlower') {
        return {...state};
    }
    if (action.type == 'addFlowerInBascet') {
        return {...state, product: action.payload, ...state.arrayFlowerForBascet.push(action.payload)}
    }
    if (action.type == 'addProductInBascet') {
        return {...state, product: action.payload, ...state.arrayRelatedProductsForBascet.push(action.payload)}
    }
    return {...state};
    
}