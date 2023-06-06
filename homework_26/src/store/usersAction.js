
export const SET_AUTH = 'SET_AUTH'
export const SET_CART_AMOUNT = 'SET_CART_AMOUNT'
const actionCreator = (type, payload) => {
    if (payload == undefined) {
        return { type }
    } else {
        return { type, payload }
    }
}

const setIsAuthThunkAction = (isAuth) => actionCreator(SET_AUTH, isAuth)
const setCartAmountAction = (amount) => actionCreator(SET_CART_AMOUNT, amount)

export const setCartAmountThunk = (amount) => {
    return (dispatch) => {
        dispatch(setCartAmountAction(amount));
    };
};

export const setIsAuthThunk = (isAuth) => {
    return (dispatch) => {
        dispatch(setIsAuthThunkAction(isAuth))
    }
}