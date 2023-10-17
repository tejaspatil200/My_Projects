import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import './navbar.css'
import { Link } from 'react-router-dom'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { logoutUser } from './../actions/userActions';

import { useDispatch, useSelector } from 'react-redux';


function Navbar() {


    const dispatch = useDispatch();


    const cartreducerstate = useSelector(state => state.CartReducer)
    const { cartItems } = cartreducerstate




    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const currentUser = JSON.parse(localStorage.getItem('currentUser'))


    return (
        <nav className="header">
             <Link to="/" className="header__link">
            <img className="header__logo" src="" alt="logo" src="https://t3.ftcdn.net/jpg/02/45/84/16/360_F_245841615_d7QzRv937jfiC176rmKK60ckNXU9V76z.jpg" />
            </Link>
            
            {/* <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div> */}
            <div className="header__nav">
                {/* 1st link */}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        {<span className="header__optionLineOne">WELCOME TO</span>}
                        <span className="header__optionLineTwo ">SHOP DIGITAL</span>
                    </div>
                </Link>
                {/* 2nd link */}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Hello</span>
                        <span className="header__optionLineTwo">& Hi</span>
                    </div>
                </Link>
                {/* 3rd */}
                <Link to="/" className="header__link">
                    <div className="header__option ">
                        <span className="header__optionLineOne">our</span>
                        <span className="header__optionLineTwo">OFFERS</span>
                    </div>
                </Link>
            </div>
            {/* basket icon with number */}
         

            <div className="header__menu">

                {currentUser ? (
                    <div>

                        <Button className="navbar-nav m-auto" color="secondary" variant="contained" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                            Hello {currentUser.customerName}
                        </Button>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <Link to="/profile" className="dropdown-item">
                                <MenuItem  >Edit Profile</MenuItem>
                            </Link>
                            <Link to="/orders" className="dropdown-item">
                                <MenuItem >Order Details</MenuItem>
                            </Link>

                            <li className="dropdown-item" onClick={() => { dispatch(logoutUser()) }}>

                                <MenuItem >Logout</MenuItem>
                            </li>

                        </Menu>


                    </div>

                ) : (
                  
                    <Button className="navbar-nav ms-md-auto " color="secondary" variant="contained" aria-controls="simple-menu" aria-haspopup="true" href="/login">
                        Login
                    </Button>

                )}
            </div>



            <Link to="/cart" className="header__link">
                <div className="header__optionBasket">
                    <ShoppingBasketIcon />
                    <h6 className="cart__name">Cart</h6>
                    {/* number of items in the basket */}
                    <span className="header_optionLineTwo header__basketCount">{cartItems.length}</span>
                </div>
            </Link>

        </nav>
    )
}

export default Navbar