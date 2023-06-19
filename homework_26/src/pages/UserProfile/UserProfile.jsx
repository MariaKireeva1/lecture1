import React from 'react';
import Header from '../../components/Header';
import TableRow from '../../components/TableRow/TableRow';
import { Box, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../common/Button';
import { deleteUserThunk } from '../../store/user/usersAction';
import { useNavigate } from 'react-router-dom';
import { useStylesCommon } from '../../common/style'

function UserProfile(props) {
    const user = useSelector(store => store.user.user)
    const products = useSelector(store => store.products.products)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const commonClasses = useStylesCommon()

    return (
        user ?
            <>
                <Header />
                <Box className={commonClasses.cartContainer}>
                    <Box>
                        <Typography variant='h5' className={commonClasses.cartTitle}>Ordered Items</Typography>
                        <table className={commonClasses.cartTable} style={{ borderCollapse: 'collapse' }}>
                            <TableRow page={'Profile'} />
                            {
                                user.orders.length ? user.orders.map((item) => {
                                    let product = products.find((el) => el.id === item.id)
                                    return (<TableRow page={'Profile'} product={product} item={item} />)
                                })
                                    :
                                    null
                            }
                        </table>
                    </Box>
                    <Box className={commonClasses.cartInfoTable}>
                        <Typography variant='h5' className={commonClasses.cartTitle} sx={{ textAlign: 'start' }}>My info</Typography>
                        <table >
                            <tr>
                                <td>Name:</td>
                                <td>{user.name}</td>
                            </tr>
                            <tr>
                                <td>Email:</td>
                                <td>{user.email}</td>
                            </tr>
                        </table>
                        <Button title={'Delete account'} action={() => {
                            localStorage.removeItem('userId')
                            dispatch(deleteUserThunk(user.id))
                            navigate('/main')
                        }} />
                    </Box>
                </Box>
            </>
            : null
    );
}

export default UserProfile;