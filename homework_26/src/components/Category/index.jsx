import React, { useEffect } from 'react';
import ProductItem from '../ProductItem';
import { Box, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsThunk } from '../../store/products/productsAction';

function Category({ name }) {
    const products = useSelector(store => store.products.products)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProductsThunk())
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