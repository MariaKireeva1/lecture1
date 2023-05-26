import React, { useContext } from 'react';
import './style.sass'
import logo from '../../images/logo.png';
import cart from '../../images/shopping-cart.png';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import ShoppingCartContext from '../../context/ShoppingCartContext';

function Header(props) {
    let storage = JSON.parse(localStorage.getItem('userData'));
    const {cartAmount} = useContext(ShoppingCartContext)
    const navigate = useNavigate()
    const logOut = () => {
        localStorage.removeItem('userData');
        api.changeStatus(storage.id, false)
        navigate('/main')
    }
    

    return (
        <header>
            <nav>
            <div className="header">
                <div className="header__logo" onClick={() => navigate('/main')}> <img src={logo} alt="logo"></img></div>

                <div className="header__info">
                    <div className="header__greeting">
                        {storage ? 
                       <div className="header__greeting"> 
                        Hi, <span>{storage.name}</span>
                         </div>
                        :
                        <div className="header__greeting" > 
                       Hi, <span onClick={() => navigate('/login')}>Log in</span>
                         </div>
                        }
                        
                    </div>

                    <div className="header__stick"></div>

                    <div className="header__cart">
                        <a href="./shoppingCart.html"><img src={cart} alt="cart"></img></a>
                        <div className="header__cart_circle">{storage ? cartAmount: 0}</div>
                    </div>

                    <div onClick={() => logOut()} className={storage ? "header__logout header__logout-active" : "header__logout"}>Log out</div>
                </div>

            </div>
        </nav>
        </header>
    );
}

export default Header;