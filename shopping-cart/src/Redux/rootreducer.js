import { combineReducers } from "redux";
import CartReducer from "./Cart/CartReducer";
import productsReducer from "./Products/ProductsReducer";
const rootreducer=combineReducers({
productsState: productsReducer,
CartState:CartReducer
})
export default rootreducer;