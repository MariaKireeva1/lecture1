import React from 'react';
import Header from '../../components/Header';
import TableRow from '../../components/TableRow/TableRow';
import { Box, Typography} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../common/Button';
import { deleteUserThunk } from '../../store/user/usersAction';
import { useNavigate } from 'react-router-dom';

function UserProfile(props) {
    const user = useSelector(store => store.user.user)
    const products = useSelector(store => store.products.products)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    return (
        user ? 
        <>
            <Header />
            <Box sx={{ display: 'flex' }}>
                <Box>
                    <Typography variant='h5' className="title" sx={{ fontWeight: 'bold' }}>Ordered Items</Typography>
                    <TableRow page={'Profile'} />
                    <table>
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
                <Box>
                    <Typography variant='h5' sx={{ fontWeight: 'bold' }} className="title">My info</Typography>
                    <table>
                        <tr>
                            <td>Name:</td>
                            <td class="account__info-name">{user.name}</td>
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td class="account__info-email">{user.email}</td>
                        </tr>
                    </table>
                    <Button title={'Delete account'} action={() => {
                        localStorage.removeItem('userId')
                        dispatch(deleteUserThunk(user.id))
                        navigate('/main')
                    }}/>
                </Box>
            </Box>
        </> 
        : null
    );
}

export default UserProfile;