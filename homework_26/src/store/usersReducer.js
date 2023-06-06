import { SET_AUTH, SET_CART_AMOUNT } from "./usersAction";

const INITIAL_STATE = {
    cartAmount: 0,
    isAuth: false
}

export default (state = INITIAL_STATE, {type, payload}) => {
    switch (type) {
        case SET_AUTH: 
            return {...state, isAuth: payload};
        case SET_CART_AMOUNT:
            return {...state, cartAmount: payload};
        default:
            return state
    }
}

