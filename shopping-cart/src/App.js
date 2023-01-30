import Store from "./Components/Store";
import { Provider } from "react-redux";
import store from "./Redux/store";
import { Routes, Route , Navigate } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/Store" element={<Store/>}/>
        <Route path="/*" element={<Navigate to="/Store"/>}/>
      </Routes>
    </Provider>
  );
}

export default App;
