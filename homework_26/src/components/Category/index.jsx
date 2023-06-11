import React, { useEffect, useState } from 'react';
import { api } from '../../services/api';
import ProductItem from '../ProductItem';
import { Box, Typography } from '@mui/material';

function Category({ name }) {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        const getProducts = async () => {
            let products = await api.getProducts();
            setProducts(products);
        }

        getProducts()
    }, [])


    return (
        <Box component='section' className='category' data-name={name} sx={{ padding: 7 }}>
            <Typography variant="h2" component="h2" sx={{ fontSize: '1.5em', fontWeight: 'bold' }}>{name}</Typography>
            <Box className='category__container' sx={{ display: 'flex', flexWrap: 'wrap' }}>
                {
                    products.map((product) => {
                        if (product.category === name) {
                            return <ProductItem key={product.id} item={product} />
                        } else {
                            return null
                        }
                    })
                }
            </Box>
        </Box>
    );
}

export default Category;