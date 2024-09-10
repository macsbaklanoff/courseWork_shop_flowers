export const reducer = (state, action) => {
    if (action.type == 'setFlower') {
        return state = action.payload;
    }
    else if (action.type == 'getFlower') {
        return state;
    }
}