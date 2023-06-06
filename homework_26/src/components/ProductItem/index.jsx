import React, { useRef, useContext } from 'react';
import './style.sass'
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import ShoppingCartContext from '../../context/ShoppingCartContext';
import { Box } from '@mui/material';


function ProductItem({ item }) {

    let storage = JSON.parse(localStorage.getItem('userData'));
    const navigate = useNavigate()
    const cartImgRef = useRef(null);
    const { cartAmount, setCartAmount } = useContext(ShoppingCartContext)
    const isItemInCart = storage && storage.shoppingCart.find(cartItem => cartItem.id === item.id);
    const cartImgClass = isItemInCart ? 'item__cart product__cart—in' : 'item__cart';

    const updateCart = () => {
        if (!storage) {
            navigate('/login')
            return
        }

        if (cartImgRef.current.classList.contains('product__cart—in')) {
            let updatedOrdersArray = storage.shoppingCart.filter((item) => item.id !== cartImgRef.current.dataset.id);
            storage.shoppingCart = updatedOrdersArray;
            setCartAmount(cartAmount - 1)
        } else {
            storage.shoppingCart.push({
                id: cartImgRef.current.dataset.id,
                count: 1
            })
            setCartAmount(cartAmount + 1)
        }

        cartImgRef.current.classList.toggle('product__cart—in');
        api.UpdateShoppingCart(storage.id, storage)
        localStorage.setItem('userData', JSON.stringify(storage));
    }



    return (
        <Box className={item.sale ? 'item item__sale' : 'item'} data-title={item.title} data-id={item.id}>
            <Box className="item__img">
                <Box component='img' src={`./images/products/${item.img}.png`}  alt={item.title} />
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
                        <Box className={cartImgClass} data-id={item.id} onClick={() => updateCart()} ref={cartImgRef}><Box component='img' src={`./images/shopping-cart.png`} alt="cart" /></Box>
                    </>
                    :
                    <>
                        <Box className="item__info">
                            <Box className="item__info-name">{item.title}</Box>
                            <Box className="item__info-price">${item.price}</Box>
                        </Box>
                        <Box className={cartImgClass} data-id={item.id} onClick={() => updateCart()} ref={cartImgRef}><Box component='img'src={`./images/shopping-cart.png`} alt="cart" /></Box>
                    </>
            }
        </Box>
    );
}

export default ProductItem;