import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import productsReducer from "./modules/products/reducer";
import cartReducer from "./modules/cart/reducer";

const reducers = combineReducers({ product: productsReducer, productCart: cartReducer })
const store = createStore(reducers, applyMiddleware(thunk))

export default store