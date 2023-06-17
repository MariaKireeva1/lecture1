import React, { useState, useEffect } from 'react';
import Category from '../../components/Category';
import Header from '../../components/Header';
import { getProductsThunk } from '../../store/products/productsAction';
import { useDispatch, useSelector } from 'react-redux';
function Main(props) {
    const [categories, setCategories] = useState([]);
    const dispatch = useDispatch()
    const products = useSelector(store => store.products.products)

    useEffect(() => {
        dispatch(getProductsThunk())
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
                categories.map((item, index) => {
                    return <Category key={index} name={item} />
                })
            }
        </>
    );
}

export default Main;

