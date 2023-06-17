import { api } from "../../services/api"
import { actionCreator } from "../utils"

export const SET_PRODUCTS = 'SET_PRODUCTS'



// export const setIsAuthAction = (isAuth) => actionCreator(SET_AUTH, isAuth)
export const setProductsAction = (products) => actionCreator(SET_PRODUCTS, products)


export const getProductsThunk = () => {
    return async (dispatch) => {
        await api.getProducts().then(({data}) => dispatch(setProductsAction(data)))
    }
}

// export const updateCartThunk = (id, cart) => {
//     return async (dispatch) => {
//         await api.updateShoppingCart(id, cart).then((res) => {
//            res.json().then(data => dispatch(setUserAction(data)))
//         })
//     }
// }

// export const postUserThunk = (user) => {
//     return async (dispatch) => {
//         await api.postUser(user).then((res) => {
//             res.json().then(data => {
//                 localStorage.setItem('userId', data.id)
//                 dispatch(setUserAction(data))
//             })
//         })
//     }
// }