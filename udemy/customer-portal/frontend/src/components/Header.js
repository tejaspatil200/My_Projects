// import React from 'react'
// import SearchIcon from '@material-ui/icons/Search'
// import './Header.css'
// import { Link } from 'react-router-dom'
// import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'

// import Button from '@material-ui/core/Button';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';

// function Header() {

//     const [anchorEl, setAnchorEl] = React.useState(null);

//     const handleClick = (event) => {
//         setAnchorEl(event.currentTarget);
//     };

//     const handleClose = () => {
//         setAnchorEl(null);
//     };



//     return (
//         <nav className="header">
//             <img className="header__logo" src="" alt="logo" src="https://i.pinimg.com/originals/75/fa/9b/75fa9b17f632646e5ae7fae3cf837761.jpg" />
//             {/* <div className="header__search">
//                 <input type="text" className="header__searchInput" />
//                 <SearchIcon className="header__searchIcon" />
//             </div> */}
//             <div className="header__nav">
//                 {/* 1st link */}
//                 <Link to="/signin" className="header__link">
//                     <div className="header__option">
//                         <span className="header__optionLineOne">Hello</span>
//                         <span className="header__optionLineTwo">Tejas</span>
//                     </div>
//                 </Link>
//                 {/* 2nd link */}
//                 <Link to="/" className="header__link">
//                     <div className="header__option">
//                         <span className="header__optionLineOne">Returns</span>
//                         <span className="header__optionLineTwo">& Orders</span>
//                     </div>
//                 </Link>
//                 {/* 3rd */}
//                 <Link to="/" className="header__link">
//                     <div className="header__option">
//                         <span className="header__optionLineOne">You</span>
//                         <span className="header__optionLineTwo">Prime</span>
//                     </div>
//                 </Link>
//             </div>
//             {/* basket icon with number */}
//             <Link to="/checkout" className="header__link">
//                 <div className="header__optionBasket">
//                     <ShoppingBasketIcon />
//                     {/* number of items in the basket */}
//                     <span className="header_optionLineTwo header__basketCount">2</span>
//                 </div>
//             </Link>

//             <div>
//                 <Button className="navbar-nav m-auto" color="secondary" variant="contained"  aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
//                      Menu
//                 </Button>
//                 <Menu
//                     id="simple-menu"
//                     anchorEl={anchorEl}
//                     keepMounted
//                     open={Boolean(anchorEl)}
//                     onClose={handleClose}
//                 >
//                     <MenuItem onClick={handleClose}>Profile</MenuItem>
//                     <MenuItem onClick={handleClose}>My account</MenuItem>
//                     <MenuItem onClick={handleClose}>Logout</MenuItem>
//                 </Menu>
//             </div>

//         </nav>
//     )
// }

// export default Header