import { act } from "react";
import { contains } from "./contains_flower";

let initialState = {
    product: {},
    countProduct: 1,
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
    if (action.type == 'deleteFlowerInBascet') {
        state.arrayFlowerForBascet = state.arrayFlowerForBascet.filter(x => x != action.payload)
        return {...state, ...state.arrayFlowerForBascet}
    }
    if (action.type == 'deleteProductInBascet') {
        state.arrayRelatedProductsForBascet = state.arrayRelatedProductsForBascet.filter(x => x != action.payload)
        return {...state, ...state.arrayRelatedProductsForBascet}
    }
    if (action.type == 'addOneFlowerCount') {
        return {...state, countProduct: state.countProduct + 1}
    }
    if (action.type == 'deleteOneFlowerCount') {
        return {...state, countProduct: state.countProduct - 1}
    }
    return {...state};
    
}