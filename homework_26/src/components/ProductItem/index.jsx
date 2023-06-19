import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { updateCartThunk } from '../../store/user/usersAction';
import { useStyle } from './style';

function ProductItem({ item }) {
    const classes = useStyle()
    let user = useSelector(store => store.user.user)
    const navigate = useNavigate()
    const cartImgRef = useRef(null);
    const cartImgClass = user && user.shoppingCart && user.shoppingCart.find(cartItem => cartItem.id === item.id)
        ? `${classes.itemCart} ${classes.productCartIn}`
        : classes.itemCart;
    const dispatch = useDispatch()

    const updateCart = (item) => {
        if (!user) {
            navigate('/login')
            return
        }

        let existInCart = user.shoppingCart.find(cartItem => cartItem.id === item.id)
        if (existInCart) {
            let updatedCart = user.shoppingCart.filter(cartItem => cartItem.id !== item.id)
            const updatedUser = {
                ...user,
                shoppingCart: updatedCart
            };
            dispatch(updateCartThunk(user.id, updatedUser))
        } else {
            let updatedCart = [...user.shoppingCart,
            {
                id: item.id,
                count: 1,
            }
            ]
            const updatedUser = {
                ...user,
                shoppingCart: updatedCart
            };
            dispatch(updateCartThunk(user.id, updatedUser))
        }
    }



    return (
        <Box className={item.sale ? `${classes.item} ${classes.itemSale}` : classes.item} data-title={item.title} data-id={item.id}>
            <Box className={classes.itemImg}>
                <Box component='img' src={`./images/products/${item.img}.png`} alt={item.title} />
            </Box>

            {
                item.sale ?
                    <>
                        <Box className={classes.itemInfo}>
                            <Box className={classes.itemInfoNameSale}>{item.title}</Box>
                            <Box className={classes.sale}>
                                <Box className={`${classes.itemInfoPrice} ${classes.crossed}`}>${item.price}</Box>
                                <Box className={classes.itemSaleAmount}>-{item.salePercent}%</Box>
                            </Box>
                            <Box className={classes.itemInfoPrice}>${item.price - (item.price * item.salePercent / 100)}</Box>
                        </Box>
                        <Box className={cartImgClass} data-id={item.id} onClick={() => updateCart(item)} ref={cartImgRef}><Box component='img' src={`./images/shopping-cart.png`} alt="cart" /></Box>
                    </>
                    :
                    <>
                        <Box className={classes.itemInfo}>
                            <Box className={classes.itemInfoName}>{item.title}</Box>
                            <Box className={classes.itemInfoPrice}>${item.price}</Box>
                        </Box>
                        <Box className={cartImgClass} data-id={item.id} onClick={() => updateCart(item)} ref={cartImgRef}><Box component='img' src={`./images/shopping-cart.png`} alt="cart" /></Box>
                    </>
            }
        </Box>
    );
}

export default ProductItem;