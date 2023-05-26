import React, { useEffect, useState } from 'react';
import { api } from '../../services/api';
import ProductItem from '../ProductItem';

function Category({name}) {

    const [products, setProducts] = useState([]); 
 

    useEffect(() => {
        const getProducts = async () => {
            let products = await api.getProducts();
            setProducts(products);
        }

        getProducts()
    }, [])

  
    return (
        <section className='category' data-name={name} style={{padding: '50px'}}>
            <h2>{name}</h2>
            <div className='category__container' style={{display: 'flex'}}>

        {
            products.map((product) => { 
                if (product.category === name) {
                     return <ProductItem key={product.id} item={product}/>
                }
            })
        }
            </div>
        </section>
    );
}

export default Category;