import { api } from "../../services/api"
import { actionCreator } from "../utils"


export const SET_AUTH = 'SET_AUTH'
export const SET_USER = 'SET_USER'
export const UPDATE_CART = 'UPDATE_CART'
export const DELETE_USER = 'DELETE_USER'

export const setIsAuthAction = (isAuth) => actionCreator(SET_AUTH, isAuth)
export const setUserAction = (user) => actionCreator(SET_USER, user)
export const deleteUserAction = (user) => actionCreator(DELETE_USER, user)

export const getUserThunk = (id) => {
    return async (dispatch) => {
        await api.getUser(id).then(({data}) => dispatch(setUserAction(data)))
    }
}

export const updateCartThunk = (id, cart) => {
    return async (dispatch) => {
        await api.updateShoppingCart(id, cart).then((res) => {
           res.json().then(data => dispatch(setUserAction(data)))
        })
    }
}

export const postUserThunk = (user) => {
    return async (dispatch) => {
        await api.postUser(user).then((res) => {
            res.json().then(data => {
                localStorage.setItem('userId', data.id)
                dispatch(setUserAction(data))
            })
        })
    }
}
export const deleteUserThunk = (id) => {
    return async (dispatch) => {
        await api.deleteAccount(id)
        dispatch(deleteUserAction(null))
    }
}