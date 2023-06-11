import { SET_AUTH, SET_USER, UPDATE_CART } from "./usersAction";

const INITIAL_STATE = {
    isAuth: false,
    user: null
}

export default (state = INITIAL_STATE, {type, payload}) => {
    switch (type) {
        case SET_AUTH: 
            return {...state, isAuth: payload};
        case SET_USER:
            return {...state, user: payload};
        case UPDATE_CART:
            return {...state, user: {...state.user, shoppingCart: [...state.user.shoppingCart, payload]}}
        default:
            return state
    }
}

