import { SET_AUTH, SET_USER, UPDATE_CART, DELETE_USER } from "./usersAction";

const INITIAL_STATE_USER = {
    isAuth: false,
    user: null
}

export const usersReducer =  (state = INITIAL_STATE_USER, {type, payload}) => {
    switch (type) {
        case SET_AUTH: 
            return {...state, isAuth: payload};
        case SET_USER:
            return { ...state, user: { ...state.user, ...payload } };
            // return {...state, user: payload};
        case UPDATE_CART:
            return {...state, user: {...state.user, shoppingCart: [...state.user.shoppingCart, payload]}}
        case DELETE_USER: {
            return {...state, user: payload}
        }
        default:
            return state
    }
}

