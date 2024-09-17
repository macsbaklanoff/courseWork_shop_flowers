import { act } from "react";
import { contains } from "./contains_flower";

let initialState = {
    product: {},
    sort: undefined,
    arrayFlowerForBascet: new Map(),
    arrayRelatedProductsForBascet: new Map(),
}

export const reducer = (state = initialState, action) => {   
    if (action.type == 'setFlower') {
        return {...state, product: action.payload}
    }
    if (action.type == 'getFlower') {
        return {...state};
    }
    if (action.type == 'addFlowerInBascet') {
        return {...state, product: action.payload, ...state.arrayFlowerForBascet.set(action.payload, 1)}
    }
    if (action.type == 'addProductInBascet') {
        return {...state, product: action.payload, ...state.arrayRelatedProductsForBascet.set(action.payload, 1)}
    }
    if (action.type == 'deleteFlowerInBascet') {
        //state.arrayFlowerForBascet = state.arrayFlowerForBascet.filter(x => x != action.payload)
        state.arrayFlowerForBascet.delete(action.payload)
        return {...state}
    }
    if (action.type == 'deleteProductInBascet') {
        return {...state, ...state.arrayRelatedProductsForBascet.delete(action.payload)}
    }
    if (action.type == 'addOneFlowerCount') {
        const temp = state.arrayFlowerForBascet.get(action.payload);
        state.arrayFlowerForBascet.set(action.payload, temp + 1);
        return {...state}
    }
    if (action.type == 'deleteOneFlowerCount') {
        const temp = state.arrayFlowerForBascet.get(action.payload)
        state.arrayFlowerForBascet.set(action.payload, temp - 1)
        return {...state}
    }
    if (action.type == 'addOneProductCount') {
        const temp = state.arrayRelatedProductsForBascet.get(action.payload);
        state.arrayRelatedProductsForBascet.set(action.payload, temp + 1);
        return {...state}
    }
    if (action.type == 'deleteOneProductCount') {
        const temp = state.arrayRelatedProductsForBascet.get(action.payload)
        state.arrayRelatedProductsForBascet.set(action.payload, temp - 1)
        return {...state}
    }
    return {...state};
    
}