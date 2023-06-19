import { api } from "../../services/api"
import { actionCreator } from "../utils"

export const SET_PRODUCTS = 'SET_PRODUCTS'


export const setProductsAction = (products) => actionCreator(SET_PRODUCTS, products)

export const getProductsThunk = () => {
    return async (dispatch) => {
        await api.getProducts().then(({data}) => dispatch(setProductsAction(data)))
    }
}
