import React, {useState, useEffect, useContext} from 'react';
import Category from '../../components/Category';
import Header from '../../components/Header';
import { api } from '../../services/api';
import ShoppingCartContext from '../../context/ShoppingCartContext'

function Main(props) {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]); 
    const {setCartAmount} = useContext(ShoppingCartContext)
    useEffect(() => {
        let storage = JSON.parse(localStorage.getItem('userData'));
        if (storage) {
            setCartAmount(storage.shoppingCart.length);
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
                        return <Category name={item}/>
                })
            }
        </>
    );
}

export default Main;