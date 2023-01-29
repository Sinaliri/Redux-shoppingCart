import { createStore, applyMiddleWare } from "redux";
import { CompareWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootreducer from "./rootreducer";

const store = createStore(rootreducer , CompareWithDevTools(applyMiddleWare(logger , thunk)));

export default store