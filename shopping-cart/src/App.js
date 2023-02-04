import Store from "./Components/Store";
import { Provider } from "react-redux";
import store from "./Redux/store";
import { Routes, Route , Navigate } from "react-router-dom";

import "./App.css";
import MainNavbar from "./Components/MainNavbar/MainNavbar";
import Cart from "./Components/Cart/Cart";
import ProductDetail from "./Components/ProductDetail/ProductDetail";

function App() {
  return (
    <Provider store={store} >
      <MainNavbar/>
      <Routes>
        <Route path="/Product/:id" element={<ProductDetail />}/>
        <Route path="/Store" element={<Store/>}/>
        <Route path="/Cart" element={<Cart/>}/>
        <Route path="/*" element={<Navigate to="/Store"/>}/>
      </Routes>
    </Provider>
  );
}

export default App;
