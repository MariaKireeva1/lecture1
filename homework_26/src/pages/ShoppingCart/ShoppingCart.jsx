import React from 'react';
import Header from '../../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import Button from '../../common/Button';
import { updateCartThunk } from '../../store/user/usersAction';
import TableRow from '../../components/TableRow/TableRow';
import './style.sass'

function ShoppingCart(props) {
  const user = useSelector(store => store.user.user)
  const products = useSelector(store => store.products.products)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const countTotal = (product, order) => {
    const total = product.sale ? order.count * (product.price - (product.salePercent / 100 * product.price)) : order.count * product.price;
    return total;
  }

  const countTotalInSummary = () => {
    let sum = 0;
    user.shoppingCart.length ? user.shoppingCart.forEach((order) => {
      let result = products.find((product) => product.id == order.id);
      sum += countTotal(result, order);
    }) : (sum = 0)

    return sum
  };

  const completeOrder = () => {
    let updatedOrders = [...user.orders];

    user.shoppingCart.forEach((item) => {
      let productIndex = user.orders.findIndex((el) => el.id === item.id);

      if (productIndex < 0) {
        updatedOrders.push(item);
      } else {
        const updatedOrder = {
          ...updatedOrders[productIndex],
          count: updatedOrders[productIndex].count + item.count,
        };
        updatedOrders[productIndex] = updatedOrder;
      }
    });
    dispatch(updateCartThunk(user.id, { ...user, orders: updatedOrders, shoppingCart: [] }));
    navigate('/profile')
  };
  return (
    <>
      <Header />
      {
        user ?
          <Box sx={{ display: 'flex', margin: '50px', gap: '170px' }}>
            <Box>
              <Typography variant='h5' className="title" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>Items in Shopping Cart</Typography>
              <TableRow page={'Cart'} />
              <table style={{ borderCollapse: 'collapse' }}>
                {
                  user.shoppingCart.length ? user.shoppingCart.map((item) => {
                    let product = products.find((el) => el.id === item.id)
                    return (<TableRow page={'Cart'} product={product} item={item} />)
                  })
                    :
                    null
                }
              </table>
            </Box>

            <Box className="order__summary" sx={{ textAlign: 'center', width: '300px ' }}>
              <Typography variant='h5' sx={{ fontWeight: 'bold', marginBottom: '20px', textAlign: 'start' }} className="title">My order summary</Typography>
              <table style={{ marginBottom: '30px', textAlign: 'center' }}>
                <tr>
                  <td style={{ padding: '0 200px 0 0' }}>Order Total</td>
                  <td style={{ padding: '0', width: '50px' }} className="order__summary-price">{countTotalInSummary()}</td>
                </tr>
              </table>
              <Button title={'Complete Order'} action={completeOrder} className="btn order__btn"></Button>
            </Box>

          </Box>
          : null
      }
    </>
  );
}

export default ShoppingCart;

