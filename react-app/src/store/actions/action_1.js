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