
import { productsReducer } from "./products/productsReducer";
import {usersReducer} from "./user/usersReducer";
import {combineReducers, configureStore} from '@reduxjs/toolkit'

const rootReducer = combineReducers({
    user: usersReducer,
    products: productsReducer
})

export default configureStore({
    reducer: rootReducer
})
// const store = createStore(usersReducer, composeWithDevTools(applyMiddleware(thunk)));
// export default store;