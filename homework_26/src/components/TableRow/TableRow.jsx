import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCartThunk } from '../../store/user/usersAction';
import './style.sass'
function TableRow({ product = null, item = null, page = null }) {
    const user = useSelector(store => store.user.user)
    const dispatch = useDispatch()


    const countTotal = (product, order) => {
        const total = product.sale ? order.count * (product.price - (product.salePercent / 100 * product.price)) : order.count * product.price;
        return total;
    }

    const deleteFromCart = (id) => {
        let updatedOrdersArray = user.shoppingCart.filter((item) => item.id !== id);
        dispatch(updateCartThunk(user.id, { ...user, shoppingCart: updatedOrdersArray }))
    }

    const updateCount = (order, count) => {
        const updatedShoppingCart = user.shoppingCart.map((item) => {
            if (item.id === order.id) {
                return { ...item, count: +count };
            }
            return item;
        });
        dispatch(updateCartThunk(user.id, { ...user, shoppingCart: updatedShoppingCart }))
    }


    return (
        !product && !item ?
            <tr style={{ backgroundColor: 'rgb(215, 211, 211)' }}>
                <td  style={{padding: '20px 32px 0 43px'}}>Item Description</td>
                <td>Price</td>
                <td>Sale</td>
                <td style={{padding: '20px 100px'}} >Quantity</td>
                <td>Total</td>
                {
                    page === 'Cart' ?
                        <td>Action</td>
                        : null
                }
            </tr>
            :
            <tr data-id={product.id}>
                <td className="cart__name">
                    <img src={`./images/products/${product.img}.png`} alt={product.title} className="cart__photo"></img>  <b>{product.title}</b>
                </td>
                <td className="cart__price">${product.price}</td>
                <td>{product.sale ? `-${product.salePercent}%` : '-'}</td>
                {
                    page === 'Cart' ?
                        <td><input type="number" value={item.count} min="1" style={{ width: '200px', borderRadius: '5px', height: '0', padding: '15px' }} onChange={(e) => updateCount(item, e.target.value)}></input></td>
                        :
                        <td>{item.count}</td>
                }
                <td className="cart__total"  >${`${countTotal(product, item)}`}</td>
                {
                    page == 'Cart' ?
                        <td><img src="./images/delete.png" alt="" className="cart__delete" onClick={() => deleteFromCart(item.id)}></img></td>
                        : null
                }
            </tr>
    );
}

export default TableRow;

