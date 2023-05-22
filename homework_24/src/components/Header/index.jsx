import React from 'react';
import './style.sass'
import logo from '../../images/logo.png';
import cart from '../../images/shopping-cart.png';


function Header(props) {
    return (
        <header>
            <nav>
            <div className="header">
                <a className="header__logo" href="./index.html"> <img src={logo} alt="logo"></img></a>

                <div className="header__info">
                    <div className="header__greeting">
                        Hi, <a href="./sign.html">Log in</a>
                    </div>

                    <div className="header__stick"></div>

                    <div className="header__cart">
                        <a href="./shoppingCart.html"><img src={cart} alt="cart"></img></a>
                        <div className="header__cart_circle">0</div>
                    </div>

                    <a href="./index.html" className="header__logout">Log out</a>
                </div>

            </div>
        </nav>
        </header>
    );
}

export default Header;