import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { courseReducer } from "./Reduces/Reduces";



export const store = createStore(courseReducer, composeWithDevTools(applyMiddleware(thunk)));