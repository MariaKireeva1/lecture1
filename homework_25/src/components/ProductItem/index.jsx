import React, {useRef, useContext, useEffect} from 'react';
import './style.sass'
import cartImage from '../../images/shopping-cart.png';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import ShoppingCartContext from '../../context/ShoppingCartContext'
const images = {
    'aircraft-carrier': require('../../images/products/aircraft-carrier.png'),
    'boat': require('../../images/products/boat.png'),
    'bus': require('../../images/products/bus.png'),
    'cabriolet': require('../../images/products/cabriolet.png'),
    'commercial-plane': require('../../images/products/commercial-plane.png'),
    'electric-car': require('../../images/products/electric-car.png'),
    'helicopter-police': require('../../images/products/helicopter-police.png'),
    'helicopter': require('../../images/products/helicopter.png'),
    'minibus': require('../../images/products/minibus.png'),
    'motorbike': require('../../images/products/motorbike.png'),
    'off-road': require('../../images/products/off-road.png'),
    'police-car': require('../../images/products/police-car.png'),
    'school-bus': require('../../images/products//school-bus.png'),
    'scooter': require('../../images/products/scooter.png'),
    'small-plane': require('../../images/products/small-plane.png'),
    'speed-boat': require('../../images/products/speed-boat.png'),
    'sport-car': require('../../images/products/sport-car.png'),
    'Suv':  require('../../images/products/suv.png')
  };

function ProductItem({item}) {
    
    let storage = JSON.parse(localStorage.getItem('userData'));
    const navigate = useNavigate()
    const cartImgRef = useRef(null);
    const {cartAmount, setCartAmount} = useContext(ShoppingCartContext)
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
        console.log(cartImgRef.current);
    }



    return (
        <div className={item.sale ? 'item item__sale' : 'item'} data-title={item.title} data-id={item.id}>
             <div className="item__img">
                <img src={images[item.img]} alt={item.title}></img>
            </div>
            {
                item.sale ? 
                <>
                    <div className="item__info">
                    <div className="item__info-name">{item.title}</div>
                    <div className="sale">
                        <div className="item__info-price crossed">${item.price}</div>
                        <div className="item__sale-amount">-{item.salePercent}%</div>
                    </div>
                        <div className="item__info-price">${item.price - (item.price * item.salePercent / 100)}</div>
                    </div>
                    <div className={cartImgClass} data-id={item.id} onClick={() => updateCart()} ref={cartImgRef}><img src={cartImage} alt="cart"></img></div>
                </>
                :
                <>
                    <div className="item__info">
                        <div className="item__info-name">{item.title}</div>
                        <div className="item__info-price">${item.price}</div>
                    </div>
                    <div className={cartImgClass} data-id={item.id} onClick={() => updateCart()} ref={cartImgRef}><img src={cartImage} alt="cart"></img></div>
                </>
            }
        </div>
    );
}

export default ProductItem;