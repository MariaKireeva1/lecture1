import React, { useState, useEffect } from 'react';
import Category from '../../components/Category';
import Header from '../../components/Header';
import { api } from '../../services/api';
import { useDispatch } from 'react-redux';
import { setCartAmountThunk } from '../../store/usersAction';

function Main(props) {
    const dispatch = useDispatch()
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    useEffect(() => {

        let storage = JSON.parse(localStorage.getItem('userData'));
        if (storage && storage.shoppingCart.length > 0) {
            dispatch(setCartAmountThunk(storage.shoppingCart.length))
        } 

        const getProducts = async () => {
            let products = await api.getProducts();
            setProducts(products);
        }

        getProducts()
    }, [])

    useEffect(() => {
        const getCategories = () => {
            let categories = [];
            products.forEach((product) => {
                !categories.includes(product.category) && categories.push(product.category)
            })
            setCategories(categories)
        }
        getCategories()
    }, [products])

    return (
        <>
            <Header />
            {
                categories.map((item) => {
                    return <Category name={item} />
                })
            }
        </>
    );
}

export default Main;

