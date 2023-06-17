import { SET_PRODUCTS } from "./productsAction";

const INITIAL_STATE_PRODUCTS = {
    products: []
}

export const productsReducer = (state = INITIAL_STATE_PRODUCTS, {type, payload}) => {
    switch (type) {
        case SET_PRODUCTS: 
            return {...state, products: payload};
        default:
            return state
    }
}

