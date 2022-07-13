import { addCart, removeCart } from "./actions"

export const addCartThunk = (product) => (dispatch) =>{
    const list = JSON.parse(localStorage.getItem("cart")) || [];
    if(list.filter((item) => item.name === product.name).length === 0){
        localStorage.setItem("cart", JSON.stringify([...list, product]));
        dispatch(addCart(product))
    }
}

export const removeCartThunk = (product) => (dispatch) =>{
    const list = JSON.parse(localStorage.getItem("cart")) || [];
    localStorage.setItem("cart", JSON.stringify(list.filter((item) => item.name !== product.name)));
    dispatch(removeCart(product))
}
