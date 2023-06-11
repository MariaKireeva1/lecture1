import React, { useState, useEffect } from 'react';
import Category from '../../components/Category';
import Header from '../../components/Header';
import { api } from '../../services/api';
import { useSelector } from 'react-redux';

function Main(props) {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    let user = useSelector(store => store.user)
    useEffect(() => {

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
                categories.map((item, index) => {
                    return <Category key={index} name={item} />
                })
            }
        </>
    );
}

export default Main;

