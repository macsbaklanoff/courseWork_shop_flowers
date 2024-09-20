import axios from "axios"

export const orderToBack = (order) => {
    axios.post('http://localhost:3001/postOrder', {
        'order' : order
    })
}