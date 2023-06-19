import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCartThunk } from '../../store/user/usersAction';
import { useStyle } from './style';
import { useStylesCommon } from '../../common/style';
import { Box } from '@mui/material';

function TableRow({ product = null, item = null, page = null }) {
    const user = useSelector(store => store.user.user)
    const dispatch = useDispatch()
    const commonClasses = useStylesCommon()
    const classes = useStyle()
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
                <td  >Item Description</td>
                <td>Price</td>
                <td>Sale</td>
                <td>Quantity</td>
                <td>Total</td>
                {
                    page === 'Cart' ?
                        <td>Action</td>
                        : null
                }
            </tr>
            :
            <tr data-id={product.id}>
                <td className={classes.cartName}>
                    <img src={`./images/products/${product.img}.png`} alt={product.title} className={classes.cartPhoto}></img>  <b>{product.title}</b>
                </td>
                <td>${product.price}</td>
                <td>
                    {
                        product.sale ?
                            <Box className={commonClasses.itemSaleAmount}>-{product.salePercent}%</Box>
                            :
                            '-'
                    }
                </td>
                {
                    page === 'Cart' ?
                        <td><input type="number" value={item.count} min="1" className={classes.cartInput} onChange={(e) => updateCount(item, e.target.value)}></input></td>
                        :
                        <td>{item.count}</td>
                }
                <td>${`${countTotal(product, item)}`}</td>
                {
                    page === 'Cart' ?
                        <td><img src="./images/delete.png" alt="" className={classes.cartDelete} onClick={() => deleteFromCart(item.id)}></img></td>
                        : null
                }
            </tr>
    );
}

export default TableRow;

