import React, { useRef } from 'react';
import './style.sass'
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { updateCartThunk } from '../../store/usersAction';

function ProductItem({ item }) {

    let userId = JSON.parse(localStorage.getItem('userId'));
    let user = useSelector(store => store.user)
    const navigate = useNavigate()
    const cartImgRef = useRef(null);
    const cartImgClass = user && user.shoppingCart && user.shoppingCart.find(cartItem => cartItem.id === item.id)
        ? 'item__cart product__cart—in'
        : 'item__cart';
    const dispatch = useDispatch()


    const updateCart = (item) => {
        if (!userId) {
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
            dispatch(updateCartThunk(userId, updatedUser))
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
            dispatch(updateCartThunk(userId, updatedUser))
        }
    }



    return (
        <Box className={item.sale ? 'item item__sale' : 'item'} data-title={item.title} data-id={item.id}>
            <Box className="item__img">
                <Box component='img' src={`./images/products/${item.img}.png`} alt={item.title} />
            </Box>

            {
                item.sale ?
                    <>
                        <Box className="item__info">
                            <Box className="item__info-name">{item.title}</Box>
                            <Box className="sale">
                                <Box className="item__info-price crossed">${item.price}</Box>
                                <Box className="item__sale-amount">-{item.salePercent}%</Box>
                            </Box>
                            <Box className="item__info-price">${item.price - (item.price * item.salePercent / 100)}</Box>
                        </Box>
                        <Box className={cartImgClass} data-id={item.id} onClick={() => updateCart(item)} ref={cartImgRef}><Box component='img' src={`./images/shopping-cart.png`} alt="cart" /></Box>
                    </>
                    :
                    <>
                        <Box className="item__info">
                            <Box className="item__info-name">{item.title}</Box>
                            <Box className="item__info-price">${item.price}</Box>
                        </Box>
                        <Box className={cartImgClass} data-id={item.id} onClick={() => updateCart(item)} ref={cartImgRef}><Box component='img' src={`./images/shopping-cart.png`} alt="cart" /></Box>
                    </>
            }
        </Box>
    );
}

export default ProductItem;