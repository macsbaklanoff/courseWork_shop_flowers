import { act } from "react";
import { contains } from "./contains_flower";

let initialState = {
    product: {},
    sort: undefined,
    arrayFlowerForBascet: new Map(),
    arrayRelatedProductsForBascet: new Map(),
}

export const reducer = (state = initialState, action) => {   
    switch (action.type) {
        case 'setFlower':
            return{...state, product: action.payload}
        case 'getFlower':
            return {...state}
        case 'addFlowerInBascet':
            return {...state, product:action.payload, ...state.arrayFlowerForBascet.set(action.payload, 1)}
        case 'addProductInBascet':
            return {...state, product: action.payload, ...state.arrayRelatedProductsForBascet.set(action.payload, 1)}
        case 'deleteFlowerInBascet':
            return {...state, ...state.arrayFlowerForBascet.delete(action.payload)}
        case 'deleteProductInBascet': 
            return {...state, ...state.arrayRelatedProductsForBascet.delete(action.payload)}
        case 'addOneFlowerCount':
            const temp1 = state.arrayFlowerForBascet.get(action.payload);
            state.arrayFlowerForBascet.set(action.payload, temp1 + 1);
            return {...state}
        case 'deleteOneFlowerCount':
            const temp2 = state.arrayFlowerForBascet.get(action.payload)
            state.arrayFlowerForBascet.set(action.payload, temp2 - 1)
            return {...state}
        case 'addOneProductCount':
            const temp3 = state.arrayRelatedProductsForBascet.get(action.payload);
            state.arrayRelatedProductsForBascet.set(action.payload, temp3 + 1);
            return {...state}
        case 'deleteOneProductCount':
            const temp4 = state.arrayRelatedProductsForBascet.get(action.payload)
            state.arrayRelatedProductsForBascet.set(action.payload, temp4 - 1)
            return {...state}
        case 'deleteBascet':
            return {...state, ...state.arrayFlowerForBascet.clear(), ...state.arrayRelatedProductsForBascet.clear()}
        default:
            return {...state}
    }
}