import { ADD_CART, REMOVE_CART } from "./actionTypes";
const defaultState = JSON.parse(localStorage.getItem("cart")) || [];

const cartReducer = (state = defaultState, action) => {
    switch(action.type) {
        case ADD_CART:
            return [...state, action.product]
        case REMOVE_CART:
            return [...state.filter((item) => item.name !== action.product.name)]
        default:
            return state
    }
}

export default cartReducer