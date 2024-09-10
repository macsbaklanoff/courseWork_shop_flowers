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