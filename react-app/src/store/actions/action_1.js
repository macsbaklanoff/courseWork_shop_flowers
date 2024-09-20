export const setFlower = (flower) => {
    return {
        type: "setFlower",
        payload: flower
    }
}
export const getFlower = () => {
    return {
        type: "getFlower"
    }
}
export const addFlowerInBascet = (flower) => {
    return {
        type: "addFlowerInBascet",
        payload: flower
    }
}
export const addProductInBascet = (product) => {
    return {
        type: "addProductInBascet",
        payload: product
    }
}
export const deleteFlowerInBascet = (flower) => {
    return {
        type: "deleteFlowerInBascet",
        payload: flower
    }
}
export const deleteProductInBascet = (product) => {
    return {
        type: "deleteProductInBascet",
        payload: product
    }
}
export const addOneFlowerCount = (flower) => {
    return {
        type: 'addOneFlowerCount',
        payload: flower,
    }
}
export const deleteOneFlowerCount = (flower) => {
    return {
        type: 'deleteOneFlowerCount',
        payload: flower,
    }
}
export const addOneProductCount = (product) => {
    return {
        type: 'addOneProductCount', 
        payload: product
    }
}
export const deleteOneProductCount = (product) => {
    return {
        type: 'deleteOneProductCount', 
        payload: product
    }
}
export const deleteBascet = () => {
    return {
        type: 'deleteBascet',
    }
}