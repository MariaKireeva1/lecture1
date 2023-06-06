import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import usersReducer from "./usersReducer";
import thunk from "redux-thunk";


const store = createStore(usersReducer, composeWithDevTools(applyMiddleware(thunk)));
export default store;